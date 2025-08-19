import express from 'express';
// NOTE: This controller function would be in /controllers/insightsController.js
import { getMarketTrends } from '../controllers/insightsController.js';

const router = express.Router();

router.route('/market-trends')
  .get(getMarketTrends);

export default router;