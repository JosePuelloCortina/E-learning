const server = require("express").Router();
const { Review } = require("../../db");

server.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  try{
    const reported= await Review.findByPk(id)
    reported.update({
          reported : true,
        });
       res.send('reseña reportada')
        console.log(reported)
  }
  catch(error){
    console.log(error, 'error al actualizar reseña');
  }
});

module.exports = server;