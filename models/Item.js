// Importing Model and DataTypes from the sequelize library
const { Model, DataTypes } = require("sequelize");

// Importing database connection
const sequelize = require("../config/connection");

// Initialize Game model (table) by extending off Sequelize's Model class
class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp_boost: {
      type: DataTypes.INTEGER,
    },
    str_boost: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;
