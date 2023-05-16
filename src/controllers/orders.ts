import { Request, Response } from 'express';
import { prisma } from '../database/prisma';
import { createOrder, getOrdersById } from '../services/orders';

export const getOrders = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const orders = await getOrdersById(userId);

  res.send(orders);
};

export const placeOrder = async (req: Request, res: Response) => {
  const { userId, products, totalPrice } = req.body;

  if (!userId || !Array.isArray(products) || !products.length) {
    res.sendStatus(400);

    return;
  }

  products.forEach(({ productId }) => {
    const product = prisma.product.findUnique({
      where: {
        itemId: productId,
      },
    });

    if (!product) {
      res.sendStatus(404);

      return;
    }
  });

  const result = await createOrder(userId, JSON.stringify(products), totalPrice);

  res.send(result);
};
