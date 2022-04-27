const server = require('express').Router();
const { User, Role, Op} = require('../../db');


server.get("/", async function(req, res, next){
    try {
        const users = await User.findAll({
            include: {
                model: Role
            } 
        });
        res.status(200).send(users)
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;