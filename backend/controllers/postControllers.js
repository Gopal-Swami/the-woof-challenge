import asyncHandler from 'express-async-handler';
import Post from '../models/Post.js';

const createPost = asyncHandler(async (req, res) => {
  const { user, title, description } = req.body;
  let cover = req.file ? req.file.path.split('public')[1] : '';

  const post = await Post.create({
    user,
    title,
    description,
    cover,
  });

  if (post) {
    res.status(201).json(post);
  } else {
    res.status(400);
    throw new Error('Invalid post data');
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No Post Found');
  }
});

const addLike = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  const { userId, username } = req.body;
  if (post) {
    const alreadyLiked = post.likes.find((r) => r.userId.toString() === userId);

    if (alreadyLiked) {
      res.status(400);
      throw new Error('Post Already Liked');
    }
    post.likes.push({ userId, username });
    await post.save();
    res.json({ success: true });
  } else {
    res.status(404);
    throw new Error('Post Not Found');
  }
});

const addComment = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  const { userId, username, comment } = req.body;
  if (post) {
    post.comments.push({ userId, username, comment });
    await post.save();
    res.json({ success: true });
  } else {
    res.status(404);
    throw new Error('Post Not Found');
  }
});

export { createPost, getPostById, getPosts, addLike, addComment };
