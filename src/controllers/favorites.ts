import {Request, Response} from "express";
import {getFavoritesById, createFavorite, updateFavorite} from "../services/favorites";

export const getFavorites = async (req: Request, res: Response) => {
    const {userId} = req.params;

    console.log(userId);

    const favorites = await getFavoritesById(userId);

    res.send(favorites);
};

export const postFavorite = async (req: Request, res: Response) => {
    const {userId, products} = req.body;

    if (!userId || !Array.isArray(products) || !products.length) {
        res.sendStatus(400);

        return;
    }

    const result = await createFavorite(userId, products);

    res.status(201).send(result);
};

export const patchFavorite = async (req: Request, res: Response) => {
    const {id, products} = req.body;

    if (!id || !Array.isArray(products)) {
        res.sendStatus(400);

        return;
    }

    const result = await updateFavorite(id, products);

    res.status(201).send(result);
};
