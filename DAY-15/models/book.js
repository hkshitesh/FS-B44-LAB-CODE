const mongoose= require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number}
});

const bookModel = mongoose.model('Book', bookSchema);
module.exports = bookModel;