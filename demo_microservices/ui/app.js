const express=require('express');
let app =express();
const path=require('path');

app.use('/welcome',express.static(path.join(__dirname,"public")))
// app.get('/',(req,res)=>{
//     res.send("Hello User")
// });


module.exports=app;