import { prisma } from '../database/prisma';

export const getCartById = async (userId: string) => {
  return prisma.cart.findUnique({
    where: {
      userId,
    },
  });
};

export const createCart = async (userId: string, products: string) => {
  return prisma.cart.create({
    data: {
      userId,
      products: JSON.parse(products),
    },
  });
};

export const updateCart = async (userId: string, products: string) => {
  return prisma.cart.update({
    where: {
      userId,
    },
    data: {
      products: JSON.parse(products),
    },
  });
};
