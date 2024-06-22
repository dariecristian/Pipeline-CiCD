const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let products = [];

app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send(product);
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(3001, () => {
    console.log("Product service running on port 3001");
});
