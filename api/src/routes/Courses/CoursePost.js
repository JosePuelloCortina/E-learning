const server = require('express').Router();
const { User, Course, Role, Category } = require('../../db');



server.post("/create", async (req, res) =>{

    let {name, description, review, duration, progress, img, user, category} = req.body //recibe los datos por body mediante formulario

    try {

        const usuario = await User.findOne({
            where: {
                id : user
            },
            include: {
                model: Role
            } 
        });
        
        const role = usuario.dataValues.roles[0].dataValues.tipo; 

        const categoria = await Category.findOne({
            where: {
                name: category
            }
        });

        
        console.log(categoria[0])

        if(role === "instructor"){
            Course.create({
                name : name,
                duration : duration,
                description : description,
                review: review,
                progress: progress, 
                img: img,               
            })
            .then(course =>{
                course.addUser(user)
                course.addCategory(category)
                .then(async () =>{
                    course.user = await course.getUsers()  
                    course.category = await course.getCategories()                 
                })
            })
           .catch((error) =>{
                console.log(error) 
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