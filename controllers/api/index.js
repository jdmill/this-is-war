const router = require("express").Router();

const userRoutes = require("./userRoutes");
const itemRoutes = require("./itemRoutes");
const gameRoutes = require("./gameRoutes");
const championRoutes = require("./championRoutes");

router.use("/users", userRoutes);
// router.use('/items', itemRoutes);
// router.use('/games', gameRoutes);
 router.use('/champions', championRoutes);

module.exports = router;
