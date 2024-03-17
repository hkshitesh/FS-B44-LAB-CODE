const exp = require('express');
const app = exp();
const pt = require('path');

const publicPath = pt.join(__dirname,'public');
console.log(publicPath);

app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`);
});

app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/pagenotfound.html`);
})

app.listen(5000);