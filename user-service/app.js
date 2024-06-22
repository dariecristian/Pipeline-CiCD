const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let users = [];

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log("User service running on port 3000");
});
