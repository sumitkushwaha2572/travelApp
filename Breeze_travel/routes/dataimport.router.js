//schema is a developer design it is a blueprint of something
const express = require('express');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            await Hotel.deleteMany({});
                // deleting the previous hotel detain jaruri nahi hai karna
            const hotelsInDB = await Hotel.insertMany(hotels.data);   // promise return karega 
            res.json(hotelsInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add data to DB"})
        }
    })

module.exports = router; 