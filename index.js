const app = require("./app/config");
const PORT = 3310;

app.listen(PORT, (err) => {
	if (err) {
		console.error("Une erreur est survenu: ", err);
	} else {
		console.log("L'application tourne sur le port : ", PORT);
	}
});
