const express = require('express');

const Wishlist = require("../model/wishlist.model");
const verifyUser = require("../middleware/verifyuser");
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = require('../controllers/wishlistController');
const router = express.Router();

router.route("/")
    .post(createWishlistHandler)
router.route("/:id")
    .delete( deleteWishlistHandler)
router.route("/")
.get(getWishlistHandler)

module.exports = router;