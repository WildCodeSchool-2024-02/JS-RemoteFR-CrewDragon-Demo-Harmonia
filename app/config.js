const express = require("express");

const app = express();

const { toto, tata, titi } = require("./controllers/totoController");

app.get("/api/tata", tata);

app.get("/api/toto", toto);

app.get("/api/titi", titi);

module.exports = app;
