const server = require("express").Router();
const { Clase } = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let deleteClase = await Clase.destroy({
    where: { id: id },
  });

  res.json({
    deleteClase: deleteClase,
  });
});

module.exports = server;


