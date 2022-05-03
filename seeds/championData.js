const { Champion } = require("../models");

const championData = [
  {
    class: "barbarian",
    hitpoints: 75,
    strength: 15,
    held_item: 1,
    user_id: 2,
  },
  {
    class: "archer",
    hitpoints: 55,
    strength: 20,
    held_item: 2,
    user_id: 3,
  },
  {
    class: "wizard",
    hitpoints: 40,
    strength: 25,
    held_item: 3,
    user_id: 1,
  },
];

const seedChampionData = () => Champion.bulkCreate(championData);

module.exports = seedChampionData;
