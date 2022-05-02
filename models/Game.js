// Importing Model and DataTypes from the sequelize library
const { Model, DataTypes } = require("sequelize");

// IMporting database connection
const sequelize = require("../config/connection");

// Initialize Game model (table) by extending off Sequelize's Model class
class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prize_pool: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
