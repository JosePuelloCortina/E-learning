const server = require("express").Router();
const {Review} = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let deletReview = await Review.destroy({
    where: { id: id },
  });

  res.json({
    deleteReview: deleteReview,
  });
});

module.exports = server;