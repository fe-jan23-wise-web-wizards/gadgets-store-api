import express from 'express';
import {
  getNewProducts,
  getProductById,
  getProductDetailsById,
  getProducts,
  getProductsCount,
  getProductsWithDiscounts,
  getRecommendedProducts,
} from '../controllers/products';

export const router = express.Router();

router.get('/', getProducts);
router.get('/new', getNewProducts);
router.get('/discount', getProductsWithDiscounts);
router.get('/count', getProductsCount);
router.get('/:id', getProductById);
router.get('/:id/details', getProductDetailsById);
router.get('/:id/recommended', getRecommendedProducts);
