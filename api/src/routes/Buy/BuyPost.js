const server = require("express").Router();
const {Buy, Course, User, Role} = require("../../db");


server.post("/", async (req, res) => {
    let {userId, courseId, discount, pay_method, quantity } = req.body; //recibe los datos por body mediante formulario

    try {
      try {
        if(!await Course.findByPk(courseId)){
            return res.status(404).json({
                message: "El curso no existe"
            })
        }
        if(!await User.findByPk(userId)){
            return res.status(404).json({
                message: "El usuario no existe"
            })
        }
      } catch (error) {
        return res.status(404).json({"message": "El usuario o el curso no existe"})
      }
      const course = await Course.findByPk(courseId);
      const courseName = course.dataValues.name
    
      const user = await User.findByPk(userId, {
          include: [Role, Buy]
      })
      const userRole = user.dataValues.roles[0].dataValues.tipo;
      const userPurchase = user.dataValues.buys.map(buy => buy.dataValues.courseId); //obtiene los cursos que ya compró el usuario


      if(userPurchase.includes(courseId)){
        return res.status(422).send("Ya compraste este curso");
      } //verifica si el usuario ya compró el curso
      if ( userRole === "alumno") {
        Buy.create({
          courseName: courseName,
          discount: discount || 0,
          pay_method: pay_method || "efectivo",
          total_price: course.dataValues.price - discount || course.dataValues.price,
          quantity: quantity
        }) //crea la compra
        .then(buyCourse => {
          buyCourse.setCourse(courseId)
          buyCourse.setUser(userId)    
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