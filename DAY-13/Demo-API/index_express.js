const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello GFG, This is node.js API');
});

app.get('/about',(req,res)=>{
    res.send('This is my About us page');
});

app.get('/greet',(req,res)=>{
    res.send('Welcome: '+req.query.name)
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});