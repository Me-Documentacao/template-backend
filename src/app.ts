import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// TODO: Add routes here
// app.use(router);

app.use(errorHandler);

export { app };
