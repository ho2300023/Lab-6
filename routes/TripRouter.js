const express= require('express');
const {
    createTrip,
    retrieveAllTrips,
    retrieveTripById
} = require('../controllers/TripController');
//const { verifyToken } = require()
const tripRouter = express.Router('../controllers/authController');
//tripRouter.use(verifyToken)

tripRouter
.route('/')
.post(createTrip)
.get(retrieveAllTrips);


tripRouter
.route('/:id')
.get(retrieveTripById);

module.exports = tripRouter;

