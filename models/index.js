// Importing models

const User = require("./User");
const Champion = require("./Champion");
const Item = require("./Item");
const ChampionItems = require("./ChampionItems");
const { sequelize } = require("./User");

// User has one champion
// Champion belongs to user ?
User.hasOne(Champion, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Item.belongsTo(Champion, {
//   foreignKey: "item_id"
// });

Champion.belongsTo(User, {
  foreignKey: "user_id",
});

Champion.hasOne(Item, {
  foreignKey: "champion_id",
  constraints: false,
});

module.exports = {
  User,
  Champion,
  Item,
};
