const express = require('express');
const router = express.Router();

// Import the Hotel model
const Hotel = require("../model/hotel.model"); // Adjust the path based on your directory structure
const singlehotelHandler = require('../controllers/singleHotelController');

router.route("/:id")
    .get(singlehotelHandler);

module.exports = router;