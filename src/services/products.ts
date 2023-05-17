import { prisma } from '../database/prisma';
import { Category } from '../types/Category';
import { SortBy } from '../types/SortBy';

export const getAll = (
  query: string,
  page: number,
  limit: number,
  sort: SortBy,
  category: Category,
) => {
  const orderBy = {};
  const where = {};

  if (category !== Category.ALL) {
    Object.assign(where, { category: category });
  }

  if (query) {
    Object.assign(where, {
      name: {
        contains: query,
        mode: 'insensitive',
      }
    });
  }

  switch (sort) {
    case SortBy.PriceLowest:
      Object.assign(orderBy, { price: 'asc' });
      break;
    case SortBy.PriceHighest:
      Object.assign(orderBy, { price: 'desc' });
      break;
    case SortBy.Newest:
      Object.assign(orderBy, { year: 'desc' });
      break;
    case SortBy.Oldest:
      Object.assign(orderBy, { year: 'asc' });
      break;
    case SortBy.Default:
    default:
      Object.assign(orderBy, { name: 'desc' });
      break;
  }

  const phones = prisma.product.findMany({
    where: where,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: orderBy,
  });

  return phones;
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

export const getRecommended = async (id: string) => {
  const productsCount = await prisma.product.count();
  const skip = Math.floor(Math.random() * productsCount);

  return prisma.product.findMany({
    where: {
      NOT: {
        itemId: id,
      },
    },
    take: 12,
    skip: skip,
  });
};

export const getById = (id: string) => {
  return prisma.product.findUnique({
    where: {
      itemId: id,
    },
  });
};

export const getCount = (category: Category, query: string) => {
  const where = {};

  if (category !== Category.ALL) {
    Object.assign(where, { category: category });
  }

  if (query) {
    Object.assign(where, {
      name: {
        contains: query,
        mode: 'insensitive',
      }
    });
  }

  return prisma.product.count({
    where: where,
  });
};
