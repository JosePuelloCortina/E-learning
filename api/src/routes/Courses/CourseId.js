const router = require("express").Router();
const { Course, Clase, User, Category } = require("../../db");

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

        {
          model: Category,
      },
      ],
    });
    if (!course) {
      res.status(404).send("This course is not found");
    }
    const courseClases = course.dataValues.clases.map(clase => clase.dataValues.id)
    console.log(courseClases, 'courseClases')
    res.status(200).send(course);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
