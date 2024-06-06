const express = require("express");
const router = express.Router();

const { browse, read } = require("../../controllers/userController");

router.get("/", browse);
router.get("/tata", read);

module.exports = router;
