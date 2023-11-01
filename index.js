require('dotenv').config()
var express = require('express')
var app = express()
var port=3000

app.get('/', function (req, res) {
  res.send('hello world')
  console.log(process.env.PORT)
})

app.listen(process.env.PORT,()=>{
    console.log(`Hello ${port}`)
})