import * as dotenv from 'dotenv';
dotenv.config();

import { app } from './api';

const port = Number(process.env.PORT) || 3333;

app.listen(port, '0.0.0.0', () =>
  console.log(`API available on http://localhost:${port}`)
);
