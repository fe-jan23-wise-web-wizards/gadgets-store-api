import express from 'express';
import {
  getNewProducts,
  getProducts,
  getProductsWithDiscounts,
} from '../controllers/products';

export const router = express.Router();

router.get('/', getProducts);
router.get('/new', getNewProducts);
router.get('/discount', getProductsWithDiscounts);
