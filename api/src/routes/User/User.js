const server = require('express').Router();
const { User, Role, Buy, Category} = require('../../db');


server.get("/", async function(req, res, next){
    try {
        const user = await User.findAll({
            include: [
                Role,
                Buy,
                {
                    model: Category ,
                    attributes: ["name"],
                    through:{
                        attributes: [],
                    }
                },
            ], 
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
        // const userPurchase = user.dataValues.buys;
        // console.log(user.dataValues)
        // const users = await User.findAll({
        //     include: [{
        //         model: Role,
        //         attributes: ["tipo"],
        //         through:{
        //             attributes: [],
        //         },
        //         // model: Buy,
        //         // attributes: ["discount", "pay_method"],
        //         // through:{
        //         //     attributes: [],
        //         // },    
        //     }], attributes: { exclude: ['createdAt', 'updatedAt'] }
        // });
        // const userData = users.concat(userPurchase)
        res.status(200).send(user)

        
    } catch (error) {
        console.log(error);
    }

})



module.exports = server;