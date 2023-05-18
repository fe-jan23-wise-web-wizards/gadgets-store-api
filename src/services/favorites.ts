import { prisma } from '../database/prisma';

export const getFavoritesById = (userId: string) => {
  return prisma.favorites.findUnique({
    where: {
      userId: userId,
    },
  });
};

export const createFavorite = (userId: string, products: string[]) => {
  return prisma.favorites.create({
    data: {
      userId,
      products: products,
    },
  });
};

export const updateFavorite = (userId: string, products: string[]) => {
  return prisma.favorites.update({
    where: {
      userId: userId,
    },
    data: {
      products: products,
    },
  });
};
