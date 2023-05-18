import {Request, Response} from "express";
import {getFavoritesById, createFavorite, updateFavorite} from "../services/favorites";

export const getFavorites = async (req: Request, res: Response) => {
    const {userId} = req.params;

    const favorites = await getFavoritesById(userId);

    if (!favorites) {
        res.status(404).send('Favorites not found');

        return;
    }

    res.send(favorites);
};

export const postFavorite = async (req: Request, res: Response) => {
    const {userId, products} = req.body;
    const favorites = await getFavoritesById(userId);

    if (!userId || !Array.isArray(products) || favorites) {
        res.status(400).send('Provide valid userId, products and make sure that record does not exist in database');

        return;
    }

    const result = await createFavorite(userId, products);

    res.status(201).send(result);
};

export const patchFavorite = async (req: Request, res: Response) => {
    const {userId} = req.params;
    const {products} = req.body;
    const favorites = await getFavoritesById(userId);

    if (!userId || !Array.isArray(products) || !favorites) {
        res.status(400).send('Provide valid userId, products and make sure that record exists in database')

        return;
    }

    const result = await updateFavorite(userId, products);

    res.status(201).send(result);
};
