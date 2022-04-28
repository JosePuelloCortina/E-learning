const server = require("express").Router();
const {Buy, Course, User, Role} = require("../../db");


server.post("/:idCurso", async (req, res) => {
    let { idUsuario, discount, pay_method } = req.body; //recibe los datos por body mediante formulario
    let {idCurso} = req.params;
    try {
      const course = await Course.findByPk(idCurso);
    
      const user = await User.findByPk(idUsuario, {
          include: [Role, Buy]
      })
      const userRole = user.dataValues.roles[0].dataValues.tipo;
      const userPurchase = user.dataValues.buys.map(buy => buy.dataValues.courseId);

      console.log(userPurchase)

      if(userPurchase.includes(idCurso)){
        return res.status(422).send("Ya compraste este curso");
      }
      if ( userRole === "alumno") {
        Buy.create({
          discount: discount,
          pay_method: pay_method,
        })
        .then(buyCourse => {
          buyCourse.setCourse(idCurso)
          buyCourse.setUser(idUsuario)    
        })
        .catch(error =>{
          console.log(error)
        })
          
      } else {
        return res.status(422).send("No tienes permiso para comprar este curso");
      }

      res.send("Curso comprado correctamente");
    } catch (error) {
      console.log("información faltante", error);
    }
});

module.exports = server;