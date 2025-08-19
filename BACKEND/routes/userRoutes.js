import express from 'express';
// NOTE: This controller function would be in /controllers/userController.js
import { endorseUser } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.route('/:userId/endorse')
  .post(endorseUser);

export default router;