const server = require('express').Router();
const { User, Course, Category, Buy} = require('../../db');



server.get("/all", async function(req, res, next){
    try {
        const courses = await Course.findAll({
            include: [{
                    model: User ,
                    attributes: ["name"],
                    through:{
                        attributes: [],
                    }    
                },
                {
                    model: Category ,
                    attributes: ["name"],
                    through:{
                        attributes: [],
                    }
                },
                Buy

            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
            
        });
        res.status(200).send(courses)
        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;