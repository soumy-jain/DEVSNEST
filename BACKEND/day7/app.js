const fs = require('fs');

const express = require('express');

app = express();
app.get('/' , (req , res, next)=> {
    res.status(200).send("Hello");
});


app.get('/abcd' , (req , res, next)=>
{
    res.send(req.query);      
});


app.get('/ab?cd' , (req , res, next)=>
{
    res.send('abcd');
});


app.get('/ab+cd' , (req , res, next)=>
{
    res.send('Multiple times b');
});


app.listen(5000);