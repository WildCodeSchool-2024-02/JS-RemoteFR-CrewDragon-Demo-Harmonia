const express = require("express");
const routers = require("./routers/index");

const app = express();

app.use("/api", routers);

module.exports = app;
