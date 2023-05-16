import express from 'express';
import { getOrders, placeOrder } from '../controllers/orders';

export const router = express.Router();

router.get('/:userId', getOrders);
router.post('/new', placeOrder);
