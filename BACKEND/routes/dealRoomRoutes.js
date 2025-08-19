// FILE: /routes/dealRoomRoutes.js

import express from 'express';
import { 
    getDealRoomDetails, 
    getMyDealRooms, 
    postMessageInDealRoom 
} from '../controllers/dealRoomController.js';
import { protect } from '../middleware/auth.js';

// Initialize the router
const router = express.Router();

router.use(protect);


router.route('/')
  .get(getMyDealRooms);


router.route('/:id')
  .get(getDealRoomDetails);


router.route('/:id/messages')
    .post(postMessageInDealRoom);

// Export the router to be used in the main index.js file
export default router;
