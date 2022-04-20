import express from 'express';
import { createPetProfile, getPetById } from '../controllers/petControllers.js';
import { upload } from '../middlewares/fileMiddleware.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
router
  .route('/:id/petprofile')
  .post(protect, upload.single('file'), createPetProfile);

router.route('/pet/:id').get(getPetById);

export default router;
