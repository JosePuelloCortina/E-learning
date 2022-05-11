const server = require("express").Router();
const {Review} = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;
try{
  await Review.destroy({
    where: { id: id },
  });

  res.send('Reseña eliminada correctamente');
}
  
  catch(error){
    res.send('Error al eliminar la reseña')
  }
});

module.exports = server;