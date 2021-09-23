//express reqire details
var express = require("express");
var app = express();

//cors install needed for connecting the react app api
var cors = require('cors');
app.use(cors());

//body parser details
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.use(function (req, res, next) {
  console.log(req.method);
  next();
});

//get details
app.get("/", function (req, res) {
  res.send("Welcome to Express Task!");
});

app.get("/expressuser", function (req, res) {
  myExpressData = {
    code: req.query.eCode,
    username: req.query.userName,
    email: req.query.emailId,
    number: req.query.phoneNumber,
    address: req.query.address,
  };
  console.log(myExpressData);
  res.end(JSON.stringify(myExpressData));
});

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

//server listen function
var server = app.listen(8081, function () {
  console.log("server Ready");
  console.log(server.address().port);
});
