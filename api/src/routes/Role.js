const server = require('express').Router();
const {Role, Op } = require('../db');

server.get("/", async function(req, res, next){
    try {
        const roles = await Role.findAll({
        });
        res.json({ success: true, data: roles });
    } catch (error) {
        console.log(error);
    }
})


server.post("/create", async function(req, res, next){
    try {
        const { tipo } = req.body;
        if(!tipo){
            return res.status(422).json({error: "No se envio el tipo"}) 
        }
        Role.create({
            tipo: tipo
        }).then(roles =>{
            res.json(roles)
        })
    } catch (error) {
        console.log(error);
    }
})
 

module.exports = server;