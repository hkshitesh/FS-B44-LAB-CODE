const mongoose =require('mongoose')
const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    Category: String
});

module.exports = mongoose.model("product",ProductSchema);