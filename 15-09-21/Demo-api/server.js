const mongoose = require("mongoose");
const express = require("express");

const Player = require("./model.js");

const app = express();

app.use(express.json()); //middlewre

mongoose
    .connect("mongodb://localhost:27017/demoapi") //promise gives us resultss are reject or error in future
    .then(() =>
        app.listen(3001, () => console.log("Server is running on 3001"))
    );

//creating api's

app.post("/players", (req, res) => {
    const players = new Player(req.body);
    players.save().then((result) => res.send(result));
});

app.get("/players", (req, res) => {
    Player.find().then((result) => res.send(result));
});

app.delete("/players/:id", (req, res) => {
    const id = req.params.id;
    Player.findByIdAndDelete(id).then((result) => res.send(result));
});

app.get("/players/:id", (req, res) => {
    const id = req.params.id;
    Player.findById(id).then((result) => res.send(result));
});

app.put("/players/:id", (req, res) => {
    const id = req.params.id;
    Player.findByIdAndUpdate(id, {
        name: `${req.body.name}`,
        email: `${req.body.email}`,
        password: `${req.body.password}`,
    })
        .then((result) => res.send(result))
        .catch((error) => console.log(error));
});
