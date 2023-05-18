import { getCart, postCart } from "../controllers/cart";
import express from "express";

export const router = express.Router();

router.post('/', postCart);
router.get('/:userId', getCart);
