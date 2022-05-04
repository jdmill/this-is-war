console.log("Script loaded properly");

const enterSite = (req, res) => {
  console.log("Button click registered");

  if (!req.session.logged_in) {
    return res.redirect("/login");
  } else {
    return res.redirect("/profile");
  }
};

document.querySelector("#enter-btn").addEventListener("click", enterSite);
