import express from 'express';
import {
  getNewProducts,
  getProductById,
  getProducts,
  getProductsWithDiscounts,
  getRecommendedProducts,
} from '../controllers/products';

export const router = express.Router();

router.get('/', getProducts);
router.get('/new', getNewProducts);
router.get('/discount', getProductsWithDiscounts);
router.get('/:id', getProductById);
router.get('/:id/recommended', getRecommendedProducts);
