const express = require("express");
const PORT = 3310;

const app = express();

app.get("/", (req, res) => {
	res.send("plop");
});

app.listen(PORT, () => {
	console.log("L'application tourne sur le port : ", PORT);
});
