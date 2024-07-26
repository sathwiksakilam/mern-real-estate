import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'
import path from 'path'

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

const _dirname = path.resolve();

const app = express();


app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);


app.use(express.static(path.join(_dirname,'/client/dist')));
app.get('*' ,(req,res)=>{
    res.sendFile(path.join(_dirname,'client','dist','index.html'));
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})
