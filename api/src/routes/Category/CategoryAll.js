const server = require('express').Router();
const { Category } = require('../../db');

server.get("/", async function(req, res, next){
    try {
        const categorias = await Category.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json({ success: true, data: categorias });
    } catch (error) {
        console.log(error);
    }
})


module.exports = server;