const exp = require('express')
const app = exp();
const PORT = 5000;

const books= [
    {id:1, title:"Introduction to Node Js", author:"John Smith"},
    {id:2, title:"Let us C", author:"Dennis R."},
    {id:3, title:"Intro to DBMS", author:"E. Navathe"}
];

app.get('/',(req,res)=>{
    res.send("Welcome to Book Store APIs");
});

app.get('/api/books',(req,res)=>{
    res.json(books);
})

app.get('/api/books/:id', (req,res)=>{
    const bookID= parseInt(req.params.id);
    const book = books.find((b)=>b.id===bookID);
    if(book)
    {
       res.json(book); 
    }
    else{
        res.status(404).json({message: "This book id is not available in Books JSON Data"})
    }
});
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});