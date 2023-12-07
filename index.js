//console.log("hello prahlad");
require('dotenv').config()
const express = require("express");
const app = express();



//const port = 4000;

app.get('/',(req,res)=>{
    res.send('hello prahlad 2')
})

app.get('/paw',(req,res)=>{
  res.send('<h1>Hello Prahlad</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`)
})