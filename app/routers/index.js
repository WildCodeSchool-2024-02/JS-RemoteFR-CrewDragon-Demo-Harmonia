const express = require("express");
const router = express.Router();

/** TOUTES MES ROUTES POUR LE ROUTERS DE LA CONFIG */

const totoRouter = require("./toto/router");

router.use("/toto", totoRouter);

module.exports = router;
