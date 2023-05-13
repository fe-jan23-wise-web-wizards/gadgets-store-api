import { prisma } from '../database/prisma';

export const getAccessoryById = (id: string) => {
  return prisma.accessory.findUnique({
    where: {
      id: id,
    },
  });
};
