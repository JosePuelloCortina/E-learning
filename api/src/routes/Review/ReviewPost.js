const server = require("express").Router();
const {Course, Review} = require("../../db");

server.post("/create", async (req, res) => {
    let {id, score, coment, name } = req.body;
        try {   
            const course = await Course.findOne({
            where: {
              id: id
            }});
            Review.create({
                idCourse:id,
                score:score,
                coment:coment,
                userName:name,
              })
              .then(reviewCourse => {
                reviewCourse.setCourse(course)
              }).catch(error =>{
                console.log(error)
              })    
            res.send("Reseña creada correctamente");
        } catch (error) {
        console.log("Error al crear reseña", error);
    }

})


module.exports = server;