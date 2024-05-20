const mongoose = require("mongoose");


const userSchema = mongoose.schema({
    name:{
        type :String,
        required: true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
        
    },
    role:{
        type:String,
        enum: ["Student","Admin","Visitor"],
    }
})

module.exports=mongoose.model("user", userSchema);