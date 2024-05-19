const express = require("express");
const app = express();
require("dotenv");
const PORT =process.env.PORT || 4000;

const dbconnect =require("../AuthApp/config/database");
app.use(express.json());


const user = require("./routes/route");
app.use("/api/V1",user);

app.listen(PORT,()=>{
    console.log(`APP is live on ${PORT}`)
});





dbconnect();
