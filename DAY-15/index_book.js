const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',()=>{});
console.log("Successfully Connected");
const Book =  require('./models/book');
const newBook = new Book({
    title: 'Introduction to Data Structure',
    author: 'Dennis martin',
    year: 2024
});

op=newBook.save();

console.log("Successfully Inserted Book into Library Database");
