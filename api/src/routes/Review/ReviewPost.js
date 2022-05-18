const server = require("express").Router();
const {Course, Review} = require("../../db");

server.post("/create", async (req, res) => {
    let {idCourse, score, coment, userName, userId } = req.body;
        try {   
            const course = await Course.findOne({
            where: {
              id: idCourse,
            },
            include: [{
              model: Review
            }]
          });
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
                let valueReview = course.dataValues.reviews.reduce((a, b) => a + b.dataValues.score, 0)
                course.update({
                  review: (valueReview + Number(score)) / (course.dataValues.reviews.length + 1)
                })
                .then(() => {
                  console.log(course)
                })
              }).catch(error =>{
                console.log(error)
              })    
            res.send("Reseña creada correctamente");
        } catch (error) {
        console.log("Error al crear reseña", error);
    }

})


module.exports = server;