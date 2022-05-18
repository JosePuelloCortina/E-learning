const server = require("express").Router();
const {Review, Course} = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let { idCourse } = req.query;
  console.log(id, idCourse)
try{


  await Review.findOne({
    where: {
      id: id
    }
  }).then(async (review) => {
    await Course.findOne({
      where: {
        id: idCourse
      },
      include: [{
        model: Review
      }]
    }).then((course) => {
      let valueReview = course.dataValues.reviews.reduce((a, b) => a + b.dataValues.score, 0)
      console.log(valueReview);
        res.send(
          course
          .update({
            review: (valueReview - Number(review.dataValues.score)) / (course.dataValues.reviews.length - 1)
          }).then(() => {
            console.log(course)
          })
          
      .then(() => {
        Review.destroy({
          where: {
            id: id
          }
        })
      })
  )
  })
  })
}
  
  catch(error){
    res.send('Error al eliminar la reseña')
  }
});

module.exports = server;