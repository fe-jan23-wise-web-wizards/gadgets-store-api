import { prisma } from '../database/prisma';

export const getAll = (limit: number) => {
  return prisma.product.findMany({
    take: limit,
  });
};

export const getNew = (limit: number) => {
  return prisma.product.findMany({
    where: {
      category: 'phones',
    },
    take: limit,
    orderBy: {
      year: 'desc',
    },
  });
};

export const getWithDiscount = async (limit: number) => {
  const products = await prisma.product.findMany();

  products.sort((p1, p2) => {
    const p1Discount = (p1.price * 100) / p1.fullPrice;
    const p2Discount = (p2.price * 100) / p2.fullPrice;

    return p1Discount - p2Discount;
  });

  return products.slice(0, limit);
};
