// const express = require('express');

// let app = express();

// app.get('/', (req,res)=>{
//     res.send("Sports backend users");
// })

//express reqire details
var express = require("express");

const mongoose = require("mongoose");

var app = express();

//cors install needed for connecting the react app api
var cors = require("cors");
app.use(cors());

//body parser details
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static("public"));

app.use(function (req, res, next) {
    console.log(req.method);
    next();
});
mongoose.connect("mongodb://localhost:27017/sports");
//get details
app.get("/", function (req, res) {
    res.send("Welcome to Express Task!");
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", () => {
    console.log("Connection Successful");
    //define schema
    var PlayerSchema = mongoose.Schema({
        id: String,
        first_name: String,
        last_name: String,
        age: Number,
        city: String,
    });
    // complie schema to model
    Player = mongoose.model("Player", PlayerSchema, "players"); // model name, schema name, collection name
    // create document intance
    player = new Player();
});

app.get('/users',async(req,res)=>{
    await Player.find().exec((err,userinfo)=>{
        if(err) {
            console.log("Error");
        }
        else {
            console.log(userinfo);
            res.send(userinfo);
        }
    })
})
//post details
// app.post("/expressuserpost", urlencodedParser, function (req, res) {
//   myExpressDataPost = {
//     code: req.body.eCode,
//     username: req.body.userName,
//     email: req.body.emailId,
//     number: req.body.phoneNumber,
//     address: req.body.address,
//   };
//   console.log(myExpressDataPost);
//   res.end(JSON.stringify(myExpressDataPost));
// });

module.exports = app;
