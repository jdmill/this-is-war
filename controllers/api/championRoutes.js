const router = require("express").Router();
const { Champion } = require("../../models");

//get all champions
router.get("/", async (req, res) => {
    try {
        const champData = await Champion.findAll();
        const champs = champData.map((champion) => champion.get({ plain: true }));
        res.json(champs);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get specific champion
router.get("/:id", async (req, res) => {
    try {
        const champData = await Champion.findByPk(req.params.id);
        const champ = champData.get({ plain: true })
        res.json(champ)
        
        if(!champData) {
            res.status(404).json({ message: "No Champion with that ID" })
        }
        
    } catch(err) {
        res.status(500).json(err)
    }
})

//create champion
router.post("/", async (req, res) => {
    try {
        const champData = await Champion.create(
            {
                class: req.body.class,
                hitpoints: req.body.hitpoints,
                strength: req.body.strength,
                item_id: req.body.item_id,
                //user_id: req.session.user_id
            }
        ).then(data => res.json(data));

        if(!champData) {
            res.status(404).json({ message: "Fields not filled" })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//Delete champion, add withAuth when that's ready
router.delete("/:id", async (req, res) => {
    try {
        const champData = await Champion.destroy({
            where: {
                id: req.params.id
            }
        }); 
        if (!champData) {
            res.status(404).json({ message: "No Champion with this ID found" });
            return;
        }
        res.status(200).json(champData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update champion
router.put("/:id", async (req, res) => {
    try {
        const champData = await Champion.update({
            hitpoints: req.body.hitpoints,
            strength: req.body.strength
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(champData)

        if (!champData) {
            res.status(404).json({ message: "No Champion with this ID found" });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/fight/:user_id", async (req, res) => {
    try {
        const champData = await Champion.findByPk(req.params.user_id);
        const champ = champData.get({ plain: true })
        res.json(champ)
        
        if(!champData) {
            res.status(404).json({ message: "No Champion with that ID" })
        }
        
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;