const server = require('express').Router();
const {Role, Op} = require('../db');


server.get("/", async function(req, res, next){
    try {
        const users = await User.findAll({
            include: {
                 model: Role
            }
        });
        res.json({ success: true, data: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'error'
        });
    }
})






module.exports = user;