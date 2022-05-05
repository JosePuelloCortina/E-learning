const server = require("express").Router();
const { Review, Course } = require("../../db");

server.get("/all", async function (req, res, next) {
  try {
    const reviews = await Review.findAll({
      include: {
        model: Course
      },
    });
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;