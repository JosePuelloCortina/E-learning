const server = require("express").Router();
const { Buy } = require("../../db");

server.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { payed} = req.body;

  Buy.findByPk(id)
    .then((buy) => {
      res.send(
        buy.update({
          payed:payed,
          // commission: commission,
        })
        );
        console.log(buy)
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = server;
