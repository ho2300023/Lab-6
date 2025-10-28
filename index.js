const express = require('express');
const app = express();
const TripRouter =require('./routes/TripRouter'); 
// const UserRouter =require('./routes/UserRouter');


app.use(express.json());
app.use('/trips', TripRouter);
///app.use('/api/v1/users', UserRouter);

module.exports={app};
