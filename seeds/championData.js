const { Champion } = require("../models");

const championData = [
  {
    class_name: "barbarian",
    hitpoints: 75,
    strength: 15,
    item_id: 1,
    user_id: 1,
  },
  {
    class_name: "archer",
    hitpoints: 55,
    strength: 20,
    item_id: 2,
    user_id: 2,
  },
  {
    class_name: "wizard",
    hitpoints: 40,
    strength: 25,
    item_id: 3,
    user_id: 3,
  },
];

const seedChampionData = () => Champion.bulkCreate(championData);

module.exports = seedChampionData;
