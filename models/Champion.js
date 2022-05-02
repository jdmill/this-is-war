// Importing Model and DataTypes from the sequelize library
const { Model, DataTypes } = require("sequelize");

// Importing database connection
const sequelize = require("../config/connection");

// Initialize Game model (table) by extending off Sequelize's Model class
class Champion extends Model {}

Champion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hitpoints: {
      type: DataTypes.INTEGER,
    },
    strength: {
      type: DataTypes.INTEGER,
    },
    held_item: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "champion",
  }
);
