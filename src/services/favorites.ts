import {prisma} from "../database/prisma";

export const getFavoritesById = (userId: string) => {
    return prisma.favorites.findMany({
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

export const updateFavorite = async (id: number, products: string[]) => {
    return prisma.favorites.update({
        where: {
            id: id,
        },
        data: {
            products: products,
        },
    });
}
