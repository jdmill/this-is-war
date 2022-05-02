// Importing models
const Game = require("./Game");
const User = require("./User");
const Champion = require("./Champion");
const Item = require("./Item");

// Game has many users
// User belongs to game ?
// Do we want to add deletion rules? E.g., on delete of game, delete users? I don't think so but open to discussion
Game.hasMany(User, {
  foreignKey: "game_id",
});

// User has one champion
// Champion belongs to user ?
User.hasOne(Champion, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Champion has one item
// We do not want to delete the item if we delete the champion/user, correct?
Champion.hasOne(Item, {
  foreignKey: "champion_id",
});

// User has many items
User.hasMany(Item, {
  foreignKey: "user_id",
});

module.exports = {
  Game,
  User,
  Champion,
  Item,
};
