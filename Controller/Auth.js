const { default: mongoose } = require("mongoose");
const user = require("../Models/User");

exports.login =(req,res)=>{
    const {email ,password} =req.body;

    const isUser = mongoose.findOne({email});
    if(!isUser){
        res.status(404){
            
        }
    }else{
        res.send
    }
}