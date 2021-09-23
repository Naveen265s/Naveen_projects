const express = require('express');
let app = express();

const path = require('path');

app.use('/',  express.static(path.join(__dirname, "public")));

// let app = express();
// app.get('/',(req,res)=>{
//     res.send("Hello UI")
// });

module.exports = app;