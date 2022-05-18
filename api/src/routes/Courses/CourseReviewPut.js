const server = require("express").Router();
const { Course, Category, Review } = require("../../db");

server.put("/updateReview", async (req, res) => {
  const { id, review } =
    req.body;

  Course.findByPk(id, {
    include: [{
        model: Review
    }]
  })
  .then((course) => {
      res.send(
        course
          .update({
            review: (course.dataValues.review + review) / (course.dataValues.reviews.length + 1)
          })
        );
        })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;