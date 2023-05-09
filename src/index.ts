import * as dotenv from 'dotenv';
import { app } from './api';

dotenv.config();

const port = Number(process.env.PORT) || 3333;

app.listen(port, '0.0.0.0', () =>
  console.log(`API available on http://localhost:${port}`)
);
