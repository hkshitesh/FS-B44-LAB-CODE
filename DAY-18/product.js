const mongoose =require('mongoose')
const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

module.exports = mongoose.model("product",ProductSchema);