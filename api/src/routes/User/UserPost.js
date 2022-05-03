const server = require("express").Router();
const { User } = require("../../db");
const bcrypt = require("bcryptjs");

server.post("/create", async function (req, res, next) {
  try {
    const { name, password, email, role } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    if (!name || !password || !email) {
      return res.status(422).json({ error: "No se enviaron todos los datos" });
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      User.create({
        name: name,
        password: newPassword,
        email: email,
      }).then((user) => {
        user.addRole(role).then(async () => {
          user.role = await user.getRoles();
          res.json({ status: "ok create" });
        });
      });
    } else {
      res.status(400).json({ status: "error", error: "Duplicate email" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});

module.exports = server;
