const express = require("express");
const router = express.Router();

/** TOUTES MES ROUTES POUR LE ROUTERS DE LA CONFIG */

const usersRouter = require("./user/router");

router.use("/users", usersRouter);

module.exports = router;
