const express= require('express');
const {
    createTrip,
    retrieveAllTrips,
} = require('../controllers/TripController');
const { verifyToken } = require()
const tripRouter = express.Router('../controllers/authController');


tripRouter.use(verifyToken)
.route('/')
.post(createTrip)
.get(retrieveAllTrips);


module.exports = tripRouter;

