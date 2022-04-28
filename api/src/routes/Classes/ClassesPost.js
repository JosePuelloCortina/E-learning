const server = require("express").Router();
const {Clase, Course, User, Role} = require("../../db");

server.post("/create", async (req, res) => {
  let { name, duration, description, url, id } =
    req.body; //recibe los datos por body mediante formulario
  // const { id } = req.params;
   

  try {
    const course = await Course.findOne({
      where: {
        id: id
      },
      include: {
        model: User, include: {
          model: Role
        }
      }
    });

    if (
      course.dataValues.users[0].dataValues.roles[0].dataValues.tipo ===
      "instructor"
    ) {
      Clase.create({
        name: name,
        duration: duration,
        description: description,
        url: url,
      })
      .then(claseCourse => {
        claseCourse.addCourse(id)
        .then(async () => {
          claseCourse.id = await claseCourse.getCourses();
        });
      })
        
    } else {
      return res.send("No tienes permiso para crear una clase");
    }

    res.send("Clase creada correctamente");
  } catch (error) {
    console.log("información faltante", error);
  }
});

module.exports = server;
