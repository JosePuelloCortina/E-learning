const router = require('express').Router();
const functions = require('../functions')
const { Course } = require('../../db');



async function courseDb(){ 
    try{ 
      

       const AllCourse = await Course.findAll(); 


    if (AllCourse.length) {
        res.status(200).send(AllCourse);
      } else {
        res.status(404).send("This course is not found");
      }
    } 
  catch (error) {
    console.log( error);
  }

}



router.get('/', async (req, res) => {


  try {

    const { name } = req.query

 
    const allData = await functions.pokemonDb()
  
    let errorsResponse = {};

    if (name) {


      if (!name.match(/^[a-zA-Z]+$/)) {
          errorsResponse.name = ' solo se admiten nombres simples'
        }
      
        if (!(Object.entries(errorsResponse).length === 0)) {
          return res.send(errorsResponse)
        }

      let nameMayuscula=  name[0].toLowerCase() + name.slice(1)
      let dataName = allData.find(e => e.name === nameMayuscula)
      if (!dataName) return res.json(null)
      return res.json(dataName)
    }
    return res.json(allData)
  } catch (err) {
    console.log(err)
  }

});














module.exports = router