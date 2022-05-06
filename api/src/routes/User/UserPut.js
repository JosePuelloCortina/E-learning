const server = require("express").Router();
const { User, Category } = require("../../db");
const bcrypt = require("bcryptjs");

server.put("/update/id/:id", async (req, res) => {
  const { id } = req.params;
  const { name, newPassword, email, categories, image } = req.body;
  if (!name || !newPassword || !email) {
    return res.status(422).json({ error: "No se enviaron todos los datos" });
  }
  const hashPassword = await bcrypt.hash(newPassword, 10);
  User.findByPk(id)
    .then((user) => {
      res.send(
        user
          .update({
            name: name,
            password: hashPassword,
            email: email,
            image: image,
          })
          .then((userUpdate) => {
            userUpdate.setCategories(categories).then(async () => {
              userUpdate.categories = await userUpdate.getCategories();
            });
          })
      );
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;
