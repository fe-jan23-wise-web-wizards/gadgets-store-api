import cors from 'cors';
import express from 'express';
import path from 'path';
import { router as phonesRouter } from './routes/phones';
import { router as productsRouter } from './routes/products';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/phones', phonesRouter);
app.use('/products', productsRouter);
app.use('/static', express.static(path.join(__dirname, '../public')));
