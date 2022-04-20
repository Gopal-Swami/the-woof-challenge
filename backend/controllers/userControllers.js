import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utilities/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile: user.profile,
      age: user.age,
      gender: user.gender,
      city: user.city,
      savedPosts: user.savedPosts,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const createProfile = asyncHandler(async (req, res) => {
  const { name, age, city, gender } = req.body;
  let profile = req.file
    ? req.file.path.split('public')[1]
    : '\\images\\avatar.png';

  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error('Please go back and sign up');
  } else {
    user.name = name;
    user.age = age;
    user.city = city;
    user.profile = profile;
    user.gender = gender;
    await user.save();
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      city: user.city,
      profile: user.profile,
      savedPosts: user.savedPosts,
      token: generateToken(user._id),
    });
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const savePost = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.savedPosts.push(req.body.postId);
    await user.save();
    res.json({ success: true });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error('Users not found');
  }
});
export {
  authUser,
  registerUser,
  getUserById,
  createProfile,
  savePost,
  getUsers,
};
