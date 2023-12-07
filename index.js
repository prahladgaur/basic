//console.log("hello prahlad");
//require('dotenv').config()
const express = require("express");
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello prahlad 2')
})

app.get('/paw',(req,res)=>{
  res.send('<h1>Hello Prahlad</h1>')
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
