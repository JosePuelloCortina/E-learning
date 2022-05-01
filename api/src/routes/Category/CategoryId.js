const server = require('express').Router();
const { Category } = require('../../db');


server.get("/id/:id", async function(req, res, next){
    try {
        const { id } = req.params;
        let category;
        if(isNaN(id)){
            category = await Category.findOne({
                where:{
                    id:id
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
        }
        res.send(category ? category : "No hay usuario!!")
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;