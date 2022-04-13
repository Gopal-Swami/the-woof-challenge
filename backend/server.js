import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './configurations/db.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import path from 'path';
import userRoutes from './routes/userRoutes.js';
import petRoutes from './routes/petRoutes.js';
dotenv.config();

connectDB();
const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/v1/woof/user', userRoutes, petRoutes);

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
