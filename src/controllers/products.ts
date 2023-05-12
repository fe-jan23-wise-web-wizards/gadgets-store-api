import { Request, Response } from 'express';
import { getPhoneById } from '../services/phones';
import {
  getAll,
  getById,
  getNew,
  getRecommended,
  getWithDiscount,
} from '../services/products';
import { Category } from '../types/Category';
import { SortBy } from '../types/SortBy';

export const getProducts = async (req: Request, res: Response) => {
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Default,
    category = Category.ALL,
  } = req.query;

  if (
    Array.isArray(page) ||
    Array.isArray(limit) ||
    Array.isArray(sort) ||
    Array.isArray(category)
  ) {
    res.sendStatus(400);

    return;
  }

  const products = await getAll(
    Number(page),
    Number(limit),
    sort as SortBy,
    category as Category,
  );

  res.send(products);
};

export const getNewProducts = async (req: Request, res: Response) => {
  const { limit = 12 } = req.query;

  if (Array.isArray(limit) || !isFinite(Number(limit))) {
    res.sendStatus(400);

    return;
  }

  const newProducts = await getNew(Number(limit));

  res.send(newProducts);
};

export const getProductsWithDiscounts = async (req: Request, res: Response) => {
  const { limit = 12 } = req.query;

  if (Array.isArray(limit) || !isFinite(Number(limit))) {
    res.sendStatus(400);

    return;
  }

  const hotProducts = await getWithDiscount(Number(limit));

  res.send(hotProducts);
};

export const getRecommendedProducts = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const product = await getById(id);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  const recommended = await getRecommended(id);

  res.send(recommended);
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const product = await getById(id);
  let productDetails;

  if (product) {
    switch (product.category as Category) {
      case Category.PHONES:
        productDetails = await getPhoneById(id);
        break;
      default:
    }
  }

  res.send(productDetails);
};
