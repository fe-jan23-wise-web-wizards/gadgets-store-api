import { Request, Response } from 'express';
import {
  createFavorite,
  getFavoritesById,
  updateFavorite,
} from '../services/favorites';

export const getFavorites = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const favorites = await getFavoritesById(userId);

  if (!favorites) {
    res.status(404).send('Favorites not found');

    return;
  }

  res.send(favorites);
};

export const postFavorite = async (req: Request, res: Response) => {
  const { userId, products } = req.body;

  if (!userId || !Array.isArray(products)) {
    res.status(400).send('Provide a valid data!');

    return;
  }

  const isFavoriteExists = await getFavoritesById(userId);

  if (isFavoriteExists) {
    const result = await updateFavorite(userId, products);

    res.status(201).send(result);

    return;
  }
  const result = await createFavorite(userId, products);

  res.status(201).send(result);
};
