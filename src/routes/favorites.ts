import express from 'express';
import {getFavorites, postFavorite, patchFavorite} from "../controllers/favorites";

export const router = express.Router();

router.get('/:userId', getFavorites);
router.post('/new', postFavorite);
router.patch('/update', patchFavorite);
