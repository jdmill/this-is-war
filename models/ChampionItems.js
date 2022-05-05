// Importing Model and DataTypes from the sequelize library
const { DataTypes } = require("sequelize");

// Importing database connection
const sequelize = require("../config/connection");

// Initialize Game model (table) by extending off Sequelize's Model class
const ChampionItems = sequelize.define("ChampionItems", {
  champion_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "champion",
      key: "id",
    },
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "item",
      key: "id",
    },
  },
});

module.exports = ChampionItems;
