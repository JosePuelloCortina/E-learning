const server = require('express').Router();
const { User, Role, Op} = require('../db');


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

server.post("/create", async function(req, res, next){
    try {
        const { name, password, email, role } = req.body;
        if(!name || !password || !email ){
            return res.status(422).json({error: "No se enviaron todos los datos"}) 
        }
        User.create({
            name: name,
            password: password,
            email: email
        }).then(user =>{
            user.addRole(role)
            .then(async () =>{
                user.role = await user.getRoles()
                res.json({
                    name: user.name,
                    password: user.password,
                    email: user.email, 
                    role: user.role,
                })
            })
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = server;