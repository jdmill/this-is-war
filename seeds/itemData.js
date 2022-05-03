const { Item } = require("../models");

const itemData = [
  {
    item_name: "leather gloves",
    hp_boost: 10,
    str_boost: 0,
    price: 15,
  },
  {
    item_name: "wooden sword",
    hp_boost: 0,
    str_boost: 10,
    price: 10,
  },
  {
    item_name: "cloak",
    hp_boost: 5,
    str_boost: 0,
    price: 5,
  },
];

const seedItemData = () => Item.bulkCreate(itemData);

module.exports = seedItemData;
