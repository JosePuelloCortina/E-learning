const server = require('express').Router();
const { Categoria } = require('../../db');


server.post("/create", async function(req, res, next){
    try {
        const { name } = req.body;
        if(!name ){
            return res.status(422).json({error: "No se enviaron todos los datos"}) 
        }
        Categoria.create({
            name: name,
        })
        .then(async () =>{
            res.send("Categoria creada correctamente");
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = server;