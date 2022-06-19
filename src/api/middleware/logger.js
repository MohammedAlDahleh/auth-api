'use strict'

const logger =(req,res,Next)=>{
    console.log('Request',req.method,req.method);
    Next();
};

module.exports=logger;