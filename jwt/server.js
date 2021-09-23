const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

var cors = require("cors");
app.use(cors());
app.use(express.json());

const posts = [
    { userName: "Naveen", title: "Post from Naveen" },
    { userName: "Kumar", title: "Post from Kumar" },
    { userName: "Praveen", title: "Post from Praveen" },
];

// app.get("/posts", (req, res) => {
//     res.json(posts);
// });

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, "samplesecret", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.post("/login", (req, res) => {
    //authenticate user
    const userName = req.body.userName;
    const user = { name: userName };
    const accessToken = jwt.sign(user, "samplesecret");
    res.json({ accessToken: accessToken });
});

app.get("/posts", authenticateToken, (req, res) => {
    //res.json(posts)
    res.json(posts.filter((post) => post.userName === req.user.name));
});

app.listen(5001);
