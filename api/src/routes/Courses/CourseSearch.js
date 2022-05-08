const router = require("express").Router();
const { Course, Clase, User, Category, Op } = require("../../db");

router.get("/search", async (req, res) => {
  const { name } = req.query;
  try {
    const course = await Course.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: User,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Clase,
        },

        {
          model: Category,
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
