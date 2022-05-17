const server = require("express").Router();
const { Buy } = require("../../db");

server.put("/setStatus", (req, res) => {
  const { buyId, idClase, status } = req.body;

  Buy.findByPk(buyId)
    .then((buy) => {
        console.log(buy)
      res.send(
        buy.update(buy)
        .then((buyUpdate) => {
            buyUpdate.addClase(idClase, {
                through: {
                    status: status
                }
            });
        })
        );
    })
    .catch((error) => {
      console.log(error);
    }
    );
});

                
// .then((courseUpdate) => {
//     if (category){
//   courseUpdate.setCategories(category).then(async () => {
//     courseUpdate.category = await courseUpdate.getCategories();
//   })}
// })

module.exports = server;