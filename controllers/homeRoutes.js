const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));

    res.json(users);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
