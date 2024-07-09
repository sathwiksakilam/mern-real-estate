import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

// Load environment variables from .env file
dotenv.config();

// Check if the MONGO environment variable is set
if (!process.env.MONGO) {
    throw new Error('The MONGO environment variable is not defined. Please check your .env file.');
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/api/user',userRouter)
