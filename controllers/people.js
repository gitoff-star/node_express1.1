let people = require('../data');

const peopleLogin=(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    res.send(`<h1>${email}</h1><h1>${password}</h1>`)
    
};

const getPeoples =(req,res)=>{

    res.json([...people.people]);
    
   
}
const addPeoples =(req,res)=>{

    res.json(req.body);
   
}

module.exports ={
    peopleLogin,
    getPeoples,
    addPeoples
}