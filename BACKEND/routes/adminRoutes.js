import express from 'express';
// NOTE: This controller function would be in /controllers/adminController.js
import { verifyUser } from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are private and restricted to the 'admin' role
router.use(protect, authorize('admin'));

router.route('/users/:userId/verify')

  .post(verifyUser);

export default router;