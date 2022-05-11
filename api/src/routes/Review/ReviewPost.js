const server = require("express").Router();
const {Course, Review} = require("../../db");

server.post("/create", async (req, res) => {
    let {idCourse, score, coment, userName, userId } = req.body;
        try {   
            const course = await Course.findOne({
            where: {
              id: idCourse
              
            }});
            console.log(course, 'esto es course')
            Review.create({
                idCourse:idCourse,
                score:score,
                coment:coment,
                userName:userName,
                userId: userId,
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