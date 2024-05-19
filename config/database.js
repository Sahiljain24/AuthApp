const mongoose = require("mongoose");
require("dotenv");

exports.dbconnect =()=>{
      mongoose.connect(process.env.DATABASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
      })
      .then(()=>(
        console.log("DATABASE CONNECTED SUCCESSFULLY")
      ))
      .catch((err)=>{console.log("COULD NOT CONNECT TO DATABASE");
                   console.error(err);
                   process.exit(1);
         })
}