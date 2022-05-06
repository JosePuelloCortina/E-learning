const server = require('express').Router();
const { User, Category } = require('../../db');

server.put('/update/id/:id', (req, res)=>{
    const { id } = req.params;
    const { name, password, email, categories, image } = req.body;
    if(!name || !password || !email ){
        return res.status(422).json({error: "No se enviaron todos los datos"}) 
    }
    User.findByPk(id)
    .then((user) =>{
     res.send(user.update({
        name: name,
        password: password,
        email: email,
        image: image,
    })
    .then((userUpdate) =>{
        userUpdate.setCategories(categories)
        .then(async() =>{
            userUpdate.categories = await userUpdate.getCategories()
        })
    }))
    }).catch((error)=>{
        console.log(error)
    })
});

module.exports = server;