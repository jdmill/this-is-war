// Importing Model and DataTypes from the sequelize library
const { Model, DataTypes } = require("sequelize");

// IMporting database connection
const sequelize = require("../config/connection");

// Initialize Game model (table) by extending off Sequelize's Model class
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    inventory: {
      type: DataTypes.ARRAY,
      allowNull: true,
    },
    win_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    lose_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    champion_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "champion",
        key: "id",
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
