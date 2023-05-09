import { prisma } from "../database/prisma";
import { SortBy } from '../types/SortBy';

export const getAllPhones = (
  page: number,
  limit: number,
  sort: SortBy) => {
  const orderBy = {};
  
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
    where: {
      category: 'phones',
    },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      ...orderBy,
    }
  }); 

  return phones;
};

export const getPhoneById = (id: string) => {
  return prisma.phone.findUnique({
    where: {
      id: id,
    }
  })
};
