const router = require("express").Router();
const { Buy, Course, User } = require("../../db");

router.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const buy = await Buy.findByPk(id, {
                include: [Course, User]
        });
        if (!buy) {
            res.status(404).send("Esta compra no existe");
        }
        res.status(200).send(buy);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;