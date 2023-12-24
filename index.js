const express = require('express')
// import express from "express"
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkedin', (req, res)=>{
    res.send("hello from Riya's linked in")
})

app.get('/yotube', (req, res)=>{
     res.send("<h1>hello from youtube</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})