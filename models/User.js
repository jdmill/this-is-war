// Importing Model and DataTypes from the sequelize library
const { Model, DataTypes } = require("sequelize");

// Importing bcrypt
const bcrypt = require("bcrypt");

// IMporting database connection
const sequelize = require("../config/connection");

// Initialize user model (table) by extending off Sequelize's Model class
class User extends Model {
  checkPassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  }
}

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
    gold: {
      type: DataTypes.INTEGER,
      defaultValue: 30,
      validate: {
        min: 0,
      },
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
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
