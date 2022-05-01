const router = require("express").Router();
const { Course, Clase, User } = require("../../db");

router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id, {
      //  include: [Clase]
      include: [
        {
            model: User ,
            attributes: ["name"],
            through:{
                attributes: [],
            }
        },    
        {
            model: Clase,
        },
      ],
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
