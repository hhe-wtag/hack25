import cors from 'cors';
import express from 'express';

import passport from './middleware/auth.middleware.js';
import globalErrorHandler from './middleware/globalErrorHandler.middleware.js';
import { UserRoutes } from './routes/user.route.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use('/api/user', UserRoutes);

app.use(globalErrorHandler);

export default app;
