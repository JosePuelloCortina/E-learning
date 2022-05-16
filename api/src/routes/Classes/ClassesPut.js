const server = require("express").Router();
const { Clase } = require("../../db");

server.put("/update/id/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, duration, url, deshabilitar,state } = req.body;
  // if (!name || !description || !duration || !url) {
  //   return res.status(422).json({ error: "No se enviaron todos los datos" });
  // }  /// no tocar sin permiso.

  Clase.findByPk(id)
    .then((clase) => {
      res.send(
        clase.update({
          name: name,
          description: description,
          duration: duration,
          url: url,
          deshabilitar:deshabilitar,
          state:state,
        })
        );
        console.log(clase)
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;
