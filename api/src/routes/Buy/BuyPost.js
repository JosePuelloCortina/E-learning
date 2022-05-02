const server = require("express").Router();
const {Buy, Course, User, Role} = require("../../db");


server.post("/", async (req, res) => {
    let {idUsuario, idCurso, discount, pay_method } = req.body; //recibe los datos por body mediante formulario

    try {
      const course = await Course.findByPk(idCurso);
      console.log(course.dataValues.name);
    
      const user = await User.findByPk(idUsuario, {
          include: [Role, Buy]
      })
      const userRole = user.dataValues.roles[0].dataValues.tipo;
      const userPurchase = user.dataValues.buys.map(buy => buy.dataValues.courseId); //obtiene los cursos que ya compró el usuario

      if(userPurchase.includes(idCurso)){
        return res.status(422).send("Ya compraste este curso");
      } //verifica si el usuario ya compró el curso
      if ( userRole === "alumno") {
        Buy.create({
          courseName: course.dataValues.name,
          discount: discount || 0,
          pay_method: pay_method || "efectivo",
          total_price: course.dataValues.price - discount || course.dataValues.price,
        }) //crea la compra
        .then(buyCourse => {
          buyCourse.setCourse(idCurso)
          buyCourse.setUser(idUsuario)    
        }) //relaciona la compra con el curso y el usuario
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