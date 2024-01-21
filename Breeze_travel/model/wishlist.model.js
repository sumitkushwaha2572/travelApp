const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    hotelId: { type: String, required: true }
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema);                 // Wishlist W should be capital 

module.exports = Wishlist;