const express= require('express');
const app= express();
const parser= require('body-parser')
const path= require('path')
const authorize = require('./authorize')
console.log('starting');
const {products, people}= require('./data');
const middleware = require('./middlewaretest');

// setting up static files and middleware
app.use(express.static('./public'));

app.use('api/user',[authorize])



app.get('/api/user',authorize,(req,res)=>{
  

    console.log(req.user);
    res.status(200).json(req.user)
    
    res.end();
})





const logger= (req,res,next)=>{
const method=req.method;
const url=req.url;

const datetime= new Date();
console.log(method, url, datetime);
// res.send("testing ")  // we can send response through middleware
//next is important to pass controller to the next functionality e.g other middlerware e.g next(abc)
// if no more functionailty is there then to pass controller to the back of called use next()
next()
}

app.get('/middlewareExample',logger,(req,res)=>{
  
    res.status(200).write("<h1>about</h1>");
    
    res.end();
})





// app.get('/',(req,res)=>{
//     console.log('server hit..')
//     // res.status(200).write("<h1>hello world</h1>");
//     res.sendFile(path.resolve(__dirname,'./navbar_withoutExpress/index.html'));
//     // res.end();
// })


//get all products in json APIs
app.get('/json',(req,res)=>{

   const data= products.map((product)=>{
        const {id,name}=product;
        return {id,name};
    })
    //get specifc data from return value e.g data.id
    data.map((data)=>{
        console.log(data.id);
    })
    res.json(data);
})

//get specifc product in Json API
app.get('/json/:pid',(req,res)=>{


    const {pid}= req.params;
    
    const singleData= products.find(
        (product)=> product.id=== Number(pid)
        );
            const data = {id,name}= singleData;
            
        
        
        console.log(data);
       

//if product is null 

if(!data){
    return res.status(404).send("Product Not found");
}

    return res.json(data);
 })


//getting complex id data url : api/data/1/review/3
app.get('/json/:pid/review/:dataid',(req,res)=>{
const {pid,dataid}= req.params;
console.log(pid,dataid);
    return res.json("complex id data hello");
 })

 //http://localhost:3000/json/test/query?search=product%201&limit=1
 
app.get('/json/test/query',(req,res)=>{
    
    console.log(req.query);
    const {search,limit}=req.query;

    let searchPro= [...products];

    if(search){
        searchPro= searchPro.filter((product)=>{
            return product.name.startsWith(search);
        });
    }

    if(limit){
        searchPro = searchPro.slice(0,Number(limit));
    }
    res.json(searchPro);
    
})


//For crude operations 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/api/login',middleware,(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    res.send(`<h1>${email}</h1><h1>${password}</h1>`)
    
})



app.all('*',(req,res)=>{
    res.status(404).write("<h1>Not found</h1>");
    res.end();
})



app.listen(3000,()=>{
    console.log('listening on http://localhost:3000');
});



