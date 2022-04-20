import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
    },
    cover: {
      type: String,
    },
    description: {
      type: String,
    },
    likes: [],
    comments: [],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
