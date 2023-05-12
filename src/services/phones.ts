import { prisma } from "../database/prisma";

export const getPhoneById = (id: string) => {
  return prisma.phone.findUnique({
    where: {
      id: id,
    }
  })
};
