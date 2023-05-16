import express from 'express';
import { getOrders, placeOrder } from '../controllers/orders';

export const router = express.Router();

router.get('/', getOrders);
router.post('/new', placeOrder);
