const server = require('express').Router();
const { Buy, User, Course} = require('../../db');


server.get("/All", async function(req, res, next){
    try {
        const buys = await Buy.findAll({
            include: [{
                model: User,
                attributes: ["name"],
                through:{
                    attributes: [],
                },
                
                model: Course,
                attributes: ["name"],
                through:{
                    attributes: [],
                }    
            }], attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.status(200).send(buys)
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;