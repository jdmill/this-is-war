// Importing models
const Game = require("./Game");
const User = require("./User");
const Champion = require("./Champion");
const Item = require("./Item");
const Inventory = require("./Inventory");

// Game has many users
// User belongs to game ?
// Do we want to add deletion rules? E.g., on delete of game, delete users? I don't think so but open to discussion
// Game.hasMany(User, {
//   foreignKey: "game_id",
// });
User.hasOne(Inventory);

Inventory.hasMany(Item);
// User has one champion
// Champion belongs to user ?
User.hasOne(Champion);

module.exports = {
  Game,
  User,
  Champion,
  Item,
};
