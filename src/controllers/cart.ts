import { createCart, getCartById, updateCart } from "../services/cart";
import { Request, Response } from "express";

export const getCart = async (req: Request, res: Response) => {
    const {userId} = req.params;
    const cart = await getCartById(userId);

    if (!cart) {
        res.status(404).send('Cart not found');

        return;
    }

    res.status(200).send(cart);
};

export const postCart = async (req: Request, res: Response) => {
    const { userId, products } = req.body;
    const isCartExists = await getCartById(userId);

    if (!userId || Array.isArray(products)) {
         res.status(400).send('Please provide correct data');

        return;
    }

    if (isCartExists) {
        const updatedCart = await updateCart(userId, products);

        res.status(201).send(updatedCart);

        return;
    } else {
        const newCart = await createCart(userId, products);

        res.status(201).send(newCart);

        return;
    }
};
