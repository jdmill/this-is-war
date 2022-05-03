const router = require("express").Router();
const { User } = require("../../models");

// Create new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Checks if email exists in database
    if (!userData) {
      res.status(400).json({
        message: "Incorrect email or password. Please try again!",
      });
      return;
    }

    // Verifies password
    const verifyPassword = await userData.checkPassword(req.body.password);

    if (!verifyPassword) {
      res.status(400).json({
        message: "Incorrect email or password. Please try again!",
      });
      return;
    }

    // Successful login
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      console.log("User login successful");

      res.status(200).json({
        user: userData,
        message: `Hello ${userData.username}! Welcome to the arena!`,
      });
    });

    // Error handler
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update user information
router.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(`Updated data for User with ID ${req.params.id}`);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      console.log("User logout successful");
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
