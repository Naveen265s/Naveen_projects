const express = require('express');

let app = express();

const path = require('path');

// app.get('/', (req,res)=>{
//     res.send("Sports backend UI");
// })
app.use('/', express.static(path.join(__dirname, "public")));

module.exports = app;