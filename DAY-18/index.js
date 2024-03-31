const express = require('express')
require('./myconnection')

const product = require('./product')
const app = express();

app.use(express.json());

app.post("/create",async (req,res)=>{
    let data = new product(req.body);
    const result = await data.save();
    console.log("Product Inserted Successfully");
    res.send(result);
});

app.get("/read", async (req,res)=>{
    let data = await product.find();
    res.send(data);
});

app.put("/update/:_id",async (req,res)=>{
    let data= await product.updateOne(req.params,{$set: req.body});
    res.send(data);
});


app.delete("/delete/:_id", async (req,res)=>{
    let data = await product.deleteOne(req.params);
    res.send(data);
})


app.listen(5000);