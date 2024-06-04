const express = require("express");
const router = express.Router();

const { toto, tata, titi } = require("../../controllers/totoController");

router.get("/", toto);
router.get("/tata", tata);
router.get("/titi", titi);

module.exports = router;
