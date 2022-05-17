const server = require("express").Router();
const { User, Role, Buy, Op, Category, Clase } = require("../../db");

server.get("/id/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    if (isNaN(id)) {
      const user = await User.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: Role
          },
          {
            model: Buy,
            include: {model: Clase}

          },
          {
            model: Category,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      user
        ? res.send(user)
        : res.status(400).json({ msg: "usuario no existe" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
