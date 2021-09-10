const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    () => console.log('Connected to DB!')
);


//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

//Route Middlewares
app.use('/api', authRoute);


app.listen(8000, () => console.log('Server Up and running, On port 8000'));