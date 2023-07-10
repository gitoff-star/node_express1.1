const http= require('http')
const express = require('express');
const app= express();
const middleware= require('./middlewaretest')





app.get('/test',middleware,(req,res)=>{
console.log(req.url);
console.log("testing api");
const pr= req.query;
console.log(pr);
})


app.listen(3000,()=>{
    console.log('server is started');
})

