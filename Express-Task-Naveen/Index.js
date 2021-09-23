const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.use("/images", express.static(__dirname + "/Images"));
// app.use("/html", express.static(__dirname + "/htmlFiles"));  // not working
// app.use("/html", express.static("public/htmlFiles"));

app.use((req, res, next) => {
  console.log(req.method);
  next();
});
mongoose.connect("mongodb://localhost:27017/test");
// get reference to DB
const db = mongoose.connection;
var empObj;
var Employee;
db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", () => {
  console.log("Connection Successful");
  //define schema
  var EmployeeSchema = mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    age: Number,
    city: String,
  });
  // complie schema to model
  Employee = mongoose.model("Employee", EmployeeSchema, "employee"); // model name, schema name, collection name
  // create document intance
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/form2", (req, res) => {
  res.sendFile(__dirname + "/public/indexPost.html");
});
app.post("/user2", urlencodedParser, (req, res) => {
  const mydata = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(mydata);
  res.end(JSON.stringify(mydata));
});
app.post("/register", urlencodedParser, async (req, res) => {
  var data = req.body;
  console.log(data, "data");
  empObj = new Employee({
    id: `${data.id}`,
    first_name: `${data.first_name}`,
    last_name: `${data.last_name}`,
    age: `${data.age}`,
    city: `${data.city}`,
  });
  await empObj.save((err, emp) => {
    if (err) {
      console.log("Sorry! Please try again");
    } else {
      console.log("Data inserted");
      res.end("Thank you for register.");
    }
  });
});
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/index1.html");
});
app.get("/user", (req, res) => {
  //   res.send(
  //     `<p>Username: <b> ${req.query["first_name"]}
  //      <br /><br />
  //      </b> Lastname:<b>${req.query["last_name"]}</b></p>`
  //   );
  const mydata = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.end(JSON.stringify(mydata));
});
app.get("/a*b", (req, res) => {
  res.send("this is new get");
});
app.put("/updateuser", (ewq, res) => {
  res.send("Request for update.");
});
app.delete("/deleteuser", (ewq, res) => {
  res.send("Request for Delete.");
});
app.get("/", (req, res) => {
  res.send("hi all");
});
const server = app.listen(8000, () => {
  console.log("Server Started");
});
// welcome to Express
