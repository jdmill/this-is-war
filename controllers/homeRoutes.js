const router = require("express").Router();
const { Champion, Item, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Champion }],
    });
    //Serialized data
    const users = userData.map((user) => user.get({ plain: true }));

    res.render("home", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Champion }],
    });

    const user = userData.get({ plain: true });

    if (user.champion) {
      console.log("champion has item");
      const itemData = await Item.findByPk(user.champion.item_id);
      const item = itemData.get({ plain: true });

      res.render("profile", {
        ...user,
        ...item,
        logged_in: true,
      });
    } else {
      res.render("profile", {
        ...user,
        logged_in: true,
      });
    }
    console.log(user);
    //console.log(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/champion/:id", async (req, res) => {
  try {
    const championData = await Champion.findByPk(req.params.id);

    const champion = championData.get({ plain: true });

    res.render("champion", {
      ...champion,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
