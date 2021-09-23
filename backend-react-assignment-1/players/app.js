const express = require('express');

let app = express();

app.get('/', (req,res)=>{
    res.send("Sports backend Players");
})

module.exports = app;

