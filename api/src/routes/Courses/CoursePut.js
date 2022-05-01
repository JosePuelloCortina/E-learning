const server = require('express').Router();
const { Course } = require('../../db');

server.put('/update/id/:id', (req, res)=>{
    const { id } = req.params;
    const { name, description, duration, img } = req.body;
    if(!name || !description || !duration || !img ){
        return res.status(422).json({error: "No se enviaron todos los datos"}) 
    }
    
    Course.findByPk(id)
    .then((course) =>{
     res.send(course.update({
        name: name,
        description: description,
        duration: duration,
        img: img
    }))
    }).catch((error)=>{
        console.log(error)
    })
});

module.exports = server;