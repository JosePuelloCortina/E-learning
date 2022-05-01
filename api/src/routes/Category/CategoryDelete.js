const server = require("express").Router();
const { Category } = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let deleteCategory = await Category.destroy({
    where: { id: id },
  });

  res.json({
    deleteCategory: deleteCategory,
  });
});

module.exports = server;