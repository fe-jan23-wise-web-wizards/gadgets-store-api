import { prisma } from '../database/prisma';

export const getTabletById = (id: string) => {
  return prisma.tablet.findUnique({
    where: {
      id: id,
    },
  });
};
