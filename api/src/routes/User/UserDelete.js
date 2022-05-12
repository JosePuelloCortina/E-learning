const server = require("express").Router();
const { User } = require("../../db");

server.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  let deleteUser = await User.destroy({
    where: { id: id },
  });

  res.json({
    deleteUser: deleteUser,
  });
});

module.exports = server;
