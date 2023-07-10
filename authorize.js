const authorize =(req,res,next)=>{

    const {user}=req.query;
    console.log(user)
    if(user){
        if(user==='abc'){
            req.user={name:'abc',id:1};
            next()
        }else{
            res.status(401).send("not authorized");
        }
            
    
    }


}

module.exports=authorize;