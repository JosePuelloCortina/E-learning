const router = require("express").Router();
const { Course, Clase } = require("../../db");

router.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findByPk(id, {
             include: [Clase]
        });
        if (!course) {
            res.status(404).send("This course is not found");
        }
        res.status(200).send(course);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
