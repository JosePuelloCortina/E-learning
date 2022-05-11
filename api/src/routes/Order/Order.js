const server = require('express').Router();
const { Order , Buy, Course, User} = require('../../db');
const { Op } = require("sequelize");
const mercadopago = require("mercadopago");

server.post('/', (req, res, next) => {
    const { status, courseId  } = req.body

    Order.create({
        // userId: userId,
        courseId: courseId,
        status: status
    })
    // .then(response => {
    //     Promise.all(
    //     orderlines.map(elem => {
    //         Course.findByPk( elem.id)
    //           .then(curso =>{
    //             const orderId = response.dataValues.id //nos da el id de order
                
                // return Buy.create({
                //     orderId: orderId,
                //     courseId: curso.id,
                //     quantity: elem.quantity,
                //     price: curso.price
                // })
              // })
                // .then(secondResponse => { 
                  //nos da el arreglo creado
                    // const cant = secondResponse.dataValues.quantity
                    // const courId = secondResponse.dataValues.courseId
                    // Course.decrement(
                    //     {stock: cant},
                    //     { where: { id: courId } }
                    // )
                // })
            // })
            .then( _ => res.send("OK"))
            .catch(err => next(err))
          }  
                )


server.get('/detalle/:id', (req, res, next) => {
    const id = req.params.id

    Order.findOne({
        where: {
          id: id,
        },
            include: {
                model: Buy,
                     where: { orderId: id},
                       }}).then(obj => {
                    res.send(obj)
                }).catch(next)
              });
module.exports = server;