// const express = require('express');
import express from "express"
const app = express()

app.get('/api/notes',(req,res)=>{
// delete a note
    res.status(200)('you got 5 notes')
})


app.post('/api/notes',(req,res)=>{
// delete a note
    res.status(201)('everything created successfully')
})
app.listen(5001,()=>{
console.log("Server is started on PORT:5001");
})