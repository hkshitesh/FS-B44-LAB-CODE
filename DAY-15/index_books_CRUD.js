const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',()=>{});
console.log("Successfully Connected");
const Book =  require('./models/book');

//Create Operation

const newBook = new Book({
    title: 'Fundamental of DBMS',
    author: 'E. Navathe',
    year: 2003
});
op=newBook.save();

// Read Operation
Book.find().then((allBooks)=>console.log(allBooks));


//Update Operation

 Book.findOneAndUpdate({author: 'Dennis martin'}, {author: 'Karry Seze'})
.then(()=>console.log("Book Updated"));

//Delete Operation
Book.deleteOne({author: 'John Smith'}).then(()=>console.log("Book Deleted"));