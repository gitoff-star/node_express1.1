const authorize = require("./authorize");

const middleware = (req,res,next)=>{
    
    
    const {email,password}=req.body;
console.log(`user is : ${email} ${password} `);

    next()
    
}

module.exports=middleware;