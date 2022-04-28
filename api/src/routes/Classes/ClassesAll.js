const server = require("express").Router();
const { Classes, Courses } = require("../../db");

server.get("/all", async function (req, res, next) {
  try {
    const classes = await Classes.findAll({
      include: {
        model: Courses
      },
    });
    res.status(200).send(classes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;