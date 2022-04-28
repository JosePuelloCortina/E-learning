const server = require("express").Router();
const { Clase, Course, User } = require("../../db");

server.get("/id/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    let clases;
    if (id) {
      clases = await Clase.findByPk(id, {
        include: {
          model: Course,
          include: {
            model: User,
            
          },
        },
      });
    }
    res.send(clases ? clases : "No hay clases con ese id!!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
