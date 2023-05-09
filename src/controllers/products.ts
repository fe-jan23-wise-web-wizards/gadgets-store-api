import { Request, Response } from 'express';
import { getAll, getNew, getWithDiscount } from '../services/products';

export const getProducts = async (req: Request, res: Response) => {
  const { limit = 16 } = req.query;

  const products = await getAll(Number(limit));

  res.send(products);
};

export const getNewProducts = async (req: Request, res: Response) => {
  const { limit = 12 } = req.query;

  const newProducts = await getNew(Number(limit));

  res.send(newProducts);
};

export const getProductsWithDiscounts = async (req: Request, res: Response) => {
  const { limit = 12 } = req.query;

  const hotProducts = await getWithDiscount(Number(limit));

  res.send(hotProducts);
};
