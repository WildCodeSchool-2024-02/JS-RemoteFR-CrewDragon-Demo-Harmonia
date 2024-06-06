const users = [
	{
		id: 1,
		name: "John Doe",
	},
	{
		id: 2,
		name: "Jane Doe",
	},
	{
		id: 3,
		name: "Jim Doe",
	},
];

const browse = (req, res) => {
	res.json(users);
};

const read = (req, res) => {
	// ==> res.?? === VIEW
	res.json(users[0]);
};

module.exports = { browse, read };
