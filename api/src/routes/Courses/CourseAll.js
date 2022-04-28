const server = require('express').Router();
const { User, Course, Category} = require('../../db');


server.get("/all", async function(req, res, next){
    try {
        const courses = await Course.findAll({
            include: {
                model: User, Category
                
            }
        });
        res.status(200).send(courses)
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;