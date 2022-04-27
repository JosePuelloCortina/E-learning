const server = require('express').Router();
const { User, Course, Role } = require('../../db');



server.post("/create", async (req, res) =>{
    let {name, description, review, duration, progress, user} = req.body //recibe los datos por body mediante formulario
    try {

        const usuario = await User.findOne({
            where: {
                id : user
            },
            include: {
                model: Role
            } 
        });

        const role = usuario.dataValues.roles[0].dataValues.tipo       

        if(role === "instructor"){
            Course.create({
                name : name,
                duration : duration,
                description : description,
                review: review,
                progress: progress,               
            })
            .then(course =>{
                course.addUser(user)
                .then(async () =>{
                    course.user = await course.getUsers()                   
                })
            })
        }else{
            return res.send("No tienes permiso para crear un curso")
        }         
    
    res.send("Curso cargado correctamente");

    } catch (error) {
        console.log("información faltante",error);
    }
    });

    module.exports = server;