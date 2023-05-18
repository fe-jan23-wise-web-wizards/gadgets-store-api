import { Request, Response } from 'express';
import { createCart, getCartById, updateCart } from '../services/cart';

export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const cart = await getCartById(userId);

  if (!cart) {
    res.status(404).send('Cart not found');

    return;
  }

  res.status(200).send(cart);
};

export const postCart = async (req: Request, res: Response) => {
  const { userId, products } = req.body;

  if (!userId || !Array.isArray(JSON.parse(products))) {
    res.status(400).send('Please provide correct data');

    return;
  }

  const isCartExists = await getCartById(userId);

  if (isCartExists) {
    const updatedCart = await updateCart(userId, products);

    res.status(201).send(updatedCart);

    return;
  }

  const newCart = await createCart(userId, products);

  res.status(201).send(newCart);
};
