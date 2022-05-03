// Importing models

const User = require("./User");
const Champion = require("./Champion");
const Item = require("./Item");

// User has one champion
// Champion belongs to user ?
User.hasOne(Champion, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Champion.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Champion,
  Item,
};
