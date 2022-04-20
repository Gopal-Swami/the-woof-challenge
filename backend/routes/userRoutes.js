import express from 'express';
import {
  authUser,
  registerUser,
  getUserById,
  createProfile,
  savePost,
  getUsers,
} from '../controllers/userControllers.js';
import { upload } from '../middlewares/fileMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.route('/login').post(authUser);
router.route('/profile/:id').put(upload.single('file'), createProfile);
router.route('/:id').get(getUserById);
router.route('/:id').put(savePost);

export default router;
