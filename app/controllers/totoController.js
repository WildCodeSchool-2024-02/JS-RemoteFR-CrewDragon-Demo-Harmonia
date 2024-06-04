const toto = (req, res) => {
	res.json({ data: "plop plop" });
};

const tata = (req, res) => {
	// ==> res.?? === VIEW
	res.json({ data: "plap plap" });
};

const titi = (req, res) => {
	res.json({ data: "plip plip" });
};

module.exports = { toto, tata, titi };
