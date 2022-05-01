const server = require('express').Router();
const { User, Course, Category } = require('../../db');

server.get('/getByName', async (req, res) => {

  try {

    const { name } = req.query
 
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
          }
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] }
      
    });

    if (name) {
      const coursesByName = courses.filter(course => course.name.toLowerCase().includes(name.toLowerCase()))
      res.send(coursesByName)
    }

    else res.send('No hay cursos con ese nombre')

  } catch (err) {
    console.log(err)
  }

});














module.exports = server