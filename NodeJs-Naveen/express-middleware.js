var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.use("/images", express.static(__dirname + "/images"));

app.use(function (req, res, next) {
  console.log(req.method);
  next();
});

//get method
app.get("/", function (req, res) {
  res.send("Hello every one!");
});

//get method
app.get("/index-demoex", function (req, res) {
  // res.sendFile(__dirname + '/' + "index-demoex.html");
  res.send("Index File Data Here");
});

//update
app.put("/updateuser", function (req, res) {
  res.send("request for update");
});

//delete
app.delete("/userdelete", function (req, res) {
  res.send("request for delete");
});

//pattern matching, /se, /sle, sample,
app.get("/s*e", function (req, res) {
  res.send("pattern here");
});

app.get("/user", function (req, res) {
  // res.send('<p>Fisrt Name: ' + req.query['first_name'] + '</p><p>Last Name: ' + req.query['last_name'] + '</p>')
  myData = {
    firstname: req.query.first_name,
    lastname: req.query.last_name,
  };
  res.end(JSON.stringify(myData));
});

app.post("/userpost", urlencodedParser, function (req, res) {
  // res.send('<p>Fisrt Name: ' + req.query['first_name'] + '</p><p>Last Name: ' + req.query['last_name'] + '</p>')
  myDataPost = {
    firstname: req.body.first_name,
    lastname: req.body.last_name,
  };
  console.log(myDataPost);
  res.end(JSON.stringify(myDataPost));
});

var server = app.listen(8081, function () {
  console.log("server started");
  console.log(server.address().port);
});

//in browser
//localhost:8081
