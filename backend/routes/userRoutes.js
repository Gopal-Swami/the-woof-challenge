import express from 'express';
import {
  authUser,
  registerUser,
  getUserById,
  createProfile,
} from '../controllers/userControllers.js';
import { upload } from '../middlewares/fileMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile/:id').put(upload.single('file'), createProfile);

export default router;
