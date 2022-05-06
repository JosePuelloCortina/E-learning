const server = require("express").Router();
const { Avatar } = require("../../db");

server.get("/", async function (req, res, next) {
  try {
    const avatares = await Avatar.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ success: true, data: avatares });
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
