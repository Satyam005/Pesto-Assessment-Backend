const express = require("express");
const app = express();

app.use(express.json());

//Route Imports
const products = require("./routes/productRoute");

app.use("/", products);

module.exports = app;
