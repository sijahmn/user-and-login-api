import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv'
import authRoutes from './routes/api/auth';
import userRoutes from './routes/api/users';

// env variable confirigation
dotenv.config()


const app = express();

// Logger Middleware
app.use(morgan('dev'));

// DB Config
const db = process.env.MONGO_URI

// Connect to Mongo
mongoose
  .connect(db) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
