const server = require("express").Router();
const { User } = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let deleteUser = await User.destroy({
    where: { id: id },
  });

  res.json({
    deleteUser: deleteUser,
  });
});
//LLORO 2.0

module.exports = server;