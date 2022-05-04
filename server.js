const express = require("express");
const session = require('express-session');
const sequelize = require("./config/connection");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

// Route to display static src images
// app.get("/static", (req, res) => {
// 	res.render("static");
// });

// Route to display dynamic src images
// app.get("/dynamic", (req, res) => {
// 	imageList = [];
// 	imageList.push({ src: "icons/flask.png", name: "flask" });
// 	imageList.push({ src: "icons/javascript.png", name: "javascript" });
// 	imageList.push({ src: "icons/react.png", name: "react" });
// 	res.render("dynamic", { imageList: imageList });
// });


const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('images'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server now live on port: ${PORT}`));
});
