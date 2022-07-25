const express=require('express');
const cors=require('cors');
const mongoose=require("mongoose");
const api =require('./routes/api')

mongoose
    .connect('mongodb://localhost:27017/evolve')
    .then(connection =>console.log('DB CONNECTED'))
    .catch(e => console.log(`Error occured ${e}`));

 const app=express();
 app.use(cors({credentials:true}));
 app.use(express.json());
 app.use(api);
 



 app.listen(process.env.port || 4000, function (){
    console.log("server is running ! ");
 })
