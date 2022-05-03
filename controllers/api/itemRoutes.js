const router = require("express").Router();
const { Item } = require("../../models");

router.get("/", async (req,res) => {
    try {
    const itemData = await Item.findAll();
    const items = itemData.map((item) => item.get({ plain:true }));
    res.json(items);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router;