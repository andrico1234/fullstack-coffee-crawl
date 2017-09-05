const express = require('express');

const locationController = require('../controllers/locationController');
const reviewController = require('../controllers/reviewsController');

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// locations
router.post('/locations', locationController.locationsCreate);
router.get('/locations', locationController.locationsList);
router.get('/locations/:locationId', locationController.locationsReadOne);
router.patch('/locations/:locationId', locationController.locationsUpdateOne);
router.delete('/locations/:locationId', locationController.locationsDeleteOne);

// reviews
router.post('/locations/:locationId/reviews', reviewController.reviewsCreate);
router.get('/locations/:locationId/reviews/:reviewId', reviewController.reviewsFind);
router.patch('/locations/:locationId/reviews/:reviewId', reviewController.reviewsUpdateOne);
router.delete('/locations/:locationId/reviews/:reviewId', reviewController.reviewsDeleteOne);

module.exports = {
    router
};