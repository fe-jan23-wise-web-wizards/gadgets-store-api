import {createCart, getCartById, updateCart} from "../services/cart";
import {Request, Response} from "express";

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
    const {userId} = req.params;
    const {products} = req.body;
    const isCartExist = await getCartById(userId);

    if (!userId || !Array.isArray(products) || isCartExist) {
         res
        .status(400)
        .send('Cart record with this userId already exists or data is invalid!');

        return;
    }

    const newCart = await createCart(userId, products);

    res.status(201).send(newCart);
};

export const patchCart = async (req: Request, res: Response) => {
    const {userId} = req.params;
    const {products} = req.body;
    const isCartExists = await getCartById(userId);

    if (!userId || !Array.isArray(products) || !isCartExists) {
        res
        .status(400)
        .send('Cart with provided userId does not exist! Send post request first and try again!');

        return;
    }

    const updatedCart = await updateCart(userId, products);

    res.status(201).send(updatedCart);
};
