const server = require('express').Router();
const { Course } = require('../../db');

server.put('/update/id/:id', (req, res)=>{
    const { id } = req.params;
    const { name, description, image, price, category} = req.body;
    if(!name || !description || !image || !price ){
        return res.status(422).json({error: "No se enviaron todos los datos"}) 
    }
    
    Course.findByPk(id)
    .then((course) =>{
     res.send(course.update({
        name: name,
        description: description,
        price: price,
        image: image
    })
    .then((courseUpdate) => {
        courseUpdate.setCategories(category).then(async () => {
            courseUpdate.category = await courseUpdate.getCategories();
        });
      })
    
    )
    
    }).catch((error)=>{
        console.log(error)
    })

});

module.exports = server;