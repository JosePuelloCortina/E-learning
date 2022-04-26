const { Router } = require('express');
const { userInfo } = require('os');
const { Course,User } = require('../db');
const router = Router();

router.post("/activity", async (req, res) =>{
    let {name, description, review,id, duration, progress} = req.body //recibe los datos por body mediante formulario
    try {
        if(User.role = "instructor"){
            let newCourse = await Course.create({
                name : name,
                duration : duration,
                description : description,
                review: review,
                progress: progress,
                id:id,
               
               })
        }    
           
          
        newCourse.addUser(newCourseUser); //actividad agregada a la DB
    res.send("Curso cargado correctamente");

    } catch (error) {
        console.log("información faltante",error);
    }
    });