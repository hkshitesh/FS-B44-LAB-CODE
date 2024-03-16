const exp = require('express')
const app = exp();
const PORT = 5000;

app.use(exp.json());
const books= [
    {id:1, title:"Introduction to Node Js", author:"John Smith"},
    {id:2, title:"Let us C", author:"Dennis R."},
    {id:3, title:"Intro to DBMS", author:"E. Navathe"}
];

app.get('/',(req,res)=>{
    res.send("Welcome to Book Store APIs");
});

// Create API
app.post('/api/books',(req,res)=>{
    const newBook= req.body;
    console.log(newBook);
    newBook.id= books.length+1
    books.push(newBook);
    res.status(200).json(newBook);
});

//Read API

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

//Update API
app.put('/api/books/:id',(req,res)=>{

    const bookID= parseInt(req.params.id);
    const updateBook= req.body;
    const index = books.findIndex((b)=>b.id ===bookID)
    console.log(index);
    if(index!==-1)
    {
        books[index] = {...bookID[index], ...updateBook};
        res.send(books[index]);
    }
    else{
        res.status(404).json({message: "This book id is not available in Books JSON Data"})
    }
});


//Delete API
app.delete('/api/books/:id',(req,res)=>{
    const bookID= parseInt(req.params.id);    
    const index = books.findIndex((b)=>b.id ===bookID)   
    if(index!==-1)
    {
        const deleteBook = books.splice(index,1)[0];        
        res.send(deleteBook);
    }
    else{
        res.status(404).json({message: "This book id is not available in Books JSON Data"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});