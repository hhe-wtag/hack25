import cors from 'cors';
import express from 'express';

import globalErrorHandler from './middleware/globalErrorHandler.middleware.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(globalErrorHandler);

export default app;
