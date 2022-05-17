const server = require("express").Router();
const { User, Category, Role } = require("../../db");
const bcrypt = require("bcryptjs");

server.put("/update/id/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    password,
    newPassword,
    email,
    categories,
    image,
    rol,
    validated,
    banned,
    cbu,
  } = req.body;
  // if (!name || !newPassword || !email) {
  //   return res.status(422).json({ error: "No se enviaron todos los datos" });
  // }
  let hashPassword;
  if (newPassword) {
    hashPassword = await bcrypt.hash(newPassword, 10);
  } else {
    hashPassword = password;
  }
  User.findByPk(id)
    .then((user) => {
      res.send(
        user
          .update({
            name: name,
            password: hashPassword,
            email: email,
            image: image,
            validated: validated,
            banned: banned,
            cbu: cbu,
          })
          .then((userUpdate) => {
            if (categories) {
              userUpdate.setCategories(categories).then(async () => {

                userUpdate.categories = await userUpdate.getCategories();
              });
            }
            if (rol) {
              userUpdate.setRoles(rol).then(async () => {
                userUpdate.roles = await userUpdate.getRoles();
              });
            }
          })
      );
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;
