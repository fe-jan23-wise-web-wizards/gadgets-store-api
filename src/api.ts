import cors from 'cors';
import express from 'express';
import { router as phonesRouter } from './routes/phones';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/phones', phonesRouter);
