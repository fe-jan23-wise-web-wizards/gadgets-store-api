import {prisma} from "../database/prisma";

export const getCartById = async (userId: string) => {
    return prisma.cart.findUnique({
        where: {
            userId,
        },
    }).catch(e => console.log(e));
};


export const createCart = async (userId: string, products: string[]) => {
    return prisma.cart.create({
        data: {
            userId,
            products,
        },
    }).catch(e => console.log(e));
};

export const updateCart = async (userId: string, products: string[]) => {
    return prisma.cart.update({
        where: {
            userId,
        },
        data: {
            products,
        },
    }).catch(e => console.log(e));
};
