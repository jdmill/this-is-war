const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.json");
//const gameData = require("./gameData.json");
const seedChampionData = require("./championData.js");
const seedItemData = require("./itemData.js");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await seedItemData();
    await seedChampionData();
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedDatabase();
