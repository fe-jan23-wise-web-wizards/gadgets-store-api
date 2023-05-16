import { prisma } from '../database/prisma';

export const getOrdersById = (userId: string) => {
  return prisma.order.findMany({
    where: {
      userId: userId,
    },
  });
};

export const createOrder = (
  userId: string,
  products: string,
  totalPrice: number,
) => {
  return prisma.order.create({
    data: {
      userId,
      products: JSON.parse(products),
      totalPrice,
    },
  });
};