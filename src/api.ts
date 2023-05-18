import cors from 'cors';
import express from 'express';
import path from 'path';
import { router as ordersRouter } from './routes/orders';
import { router as productsRouter } from './routes/products';
import { router as favoritesRouter } from './routes/favorites';
import { router as cartRouter } from './routes/cart';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/cart', cartRouter);
app.use('/favorites', favoritesRouter);
app.use('/static', express.static(path.join(__dirname, '../public')));
