import express from 'express';
import {
  createPost,
  getPostById,
  getPosts,
  addComment,
  addLike,
} from '../controllers/postControllers.js';
import { upload } from '../middlewares/fileMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();
router
  .route('/')
  .post(protect, upload.single('file'), createPost)
  .get(getPosts);

router.route('/:id').get(getPostById);
router.route('/like/:id').put(addLike);
router.route('/comment/:id').put(addComment);

export default router;
