import express from 'express';
import { createPetProfile } from '../controllers/petControllers.js';
import { upload } from '../middlewares/fileMiddleware.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
router
  .route('/:id/petprofile')
  .post(protect, upload.single('file'), createPetProfile);

export default router;
