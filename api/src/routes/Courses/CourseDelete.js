const server = require("express").Router();
const { Course } = require("../../db");

server.delete("/delete/id/:id", async (req, res) => {
  const id = req.params.id;

  let deleteCourse = await Course.destroy({
    where: { id: id },
  });

  res.json({
    deleteCourse: deleteCourse,
  });
});

module.exports = server;
