import mongoose from 'mongoose';

const petSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
    },
    breed: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    profile: {
      type: String,
      default: '\\images\\petAvatar.png',
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
