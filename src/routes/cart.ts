import { getCart, postCart } from "../controllers/cart";
import express from "express";

export const router = express.Router();

router.get('/:userId', getCart);
router.post('/', postCart);
