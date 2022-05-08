const server = require("express").Router();
const { Clase } = require("../../db");



server.delete("/delete/id/:id", async (req, res) => {
  try {

  const id = req.params.id;

 return res.json (await Clase.destroy({
  where: { id: id },
}))
  }catch(err){
    res.send(err)
  }
})

module.exports = server;


