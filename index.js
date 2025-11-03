const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const TripRouter = require('./routes/TripRouter'); 
const authRouter = require('./routes/AuthRouter');
// const UserRouter =require('./routes/UserRouter');

dotenv.config();
app.use(cors());


app.use(express.json());
app.use('/trips', TripRouter);
app.use('/auth', AuthRouter);
///app.use('/api/v1/users', UserRouter);

module.exports={app};
