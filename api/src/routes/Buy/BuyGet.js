const server = require('express').Router();
const { Buy, User, Course} = require('../../db');


server.get("/All", async function(req, res, next){ 
    try {
        const buys = await Buy.findAll({
                through:{
                    attributes: [],
                }, 
                attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        // const userId = buys[0].dataValues.userId;
        // const user = await User.findByPk(userId, {
        //     include: [Buy]
        // })
        // console.log(user)
        res.status(200).send(buys)
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;