const express= require('express');
const app= express();
const path= require('path')
const authorize = require('./authorize')
console.log('starting');
const {products, people}= require('./data')
const peopleRoute= require('./routes/people')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/people/',peopleRoute);


app.all('*',(req,res)=>{
    res.status(404).write("<h1>Not found</h1>");
    res.end();
})



app.listen(3000,()=>{
    console.log('listening on http://localhost:3000');
});



