const server = require("express").Router();
const { Classes } = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let deleteClasses = await Classes.destroy({
    where: { id: id },
  });

  res.json({
    deleteClasses: deleteClasses,
  });
});

module.exports = server;
