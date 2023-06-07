const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/Routes/api");
//Middleware middle
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router setup
app.use("/api", routes);

module.exports = app;
