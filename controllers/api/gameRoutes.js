const router = require("express").Router();
const { Champion } = require("../../models");

// router.get("/", async (req, res) => {
//     try {
//         currentUser = req.session.user_id
        
//         res.status(200).json(currentUser)
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

router.get("/", async (req, res) => {
    try {
        console.log(req.session)
        const champData = await Champion.findByPk(req.session.user_id);
        const champ = champData.get({ plain: true });
        console.log(champ);
        res.status(200).json(champ);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;