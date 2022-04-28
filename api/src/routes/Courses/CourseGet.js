const server = require('express').Router();
const { Course } = require('../../db');



async function courseDb(){ 
    try{ 
      
      const AllCourse = await Course.findAll(); 
      return AllCourse
      
    } 
  catch (error) {
    console.log( error);
  }

}



server.get('/getByName', async (req, res) => {


  try {

    const { name } = req.query
 
    const allData = await courseDb()

    if (name) {
      const coursesFind = allData.filter(course => course.name.toLowerCase().includes(name.toLowerCase()))
      res.send(coursesFind)
    }

    else res.send('No hay cursos con ese nombre')

  } catch (err) {
    console.log(err)
  }

});














module.exports = server