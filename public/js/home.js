console.log("Script loaded properly");

const enterSite = (req, res, next) => {
  console.log("Button click registered");

  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.redirect("/profile");
    next();
  }
};

document.querySelector("#enter-btn").addEventListener("click", enterSite);
