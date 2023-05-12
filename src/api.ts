import cors from 'cors';
import express from 'express';
import path from 'path';
import { router as productsRouter } from './routes/products';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/static', express.static(path.join(__dirname, '../public')));
