const server = require("express").Router();
const {Clase, Course, User, Role, Buy} = require("../../db");


server.post("/create", async (req, res) => {

    let { name, duration, description, url, id, deshabilitar, state} = req.body;
    try {
      const courseUser = await Course.findOne({
          where: {
            id: id
          },
          include: [
            {
              model: User, include: {
              model: Role
            }},
            {
              model: Buy
            }
          ]
      });

      let sellCourse = courseUser.dataValues.buys.map(buy => buy.dataValues.id);
      // console.log("sellCourse", sellCourse);

      const userRole = courseUser.dataValues.users[0].dataValues.roles[0].dataValues.tipo;

      if ( userRole === "instructor"){
        Clase.create({
          name: name,
          duration: duration,
          description: description,
          url: url,
          deshabilitar: deshabilitar,
          state:state
        })
        .then(claseCourse => {
          claseCourse.setCourse(courseUser)
          claseCourse.addBuy(sellCourse.map(buy => buy), {
            through: {
              status: false,
              courseId: id
              }
              })
        }).catch(error =>{
          console.log(error)
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
