const server = require("express").Router();
const { Clase, Course } = require("../../db");

server.get("/all", async function (req, res, next) {
  try {
    const classes = await Clase.findAll({
      include: {
        model: Course
      },
    });
    res.status(200).send(classes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;