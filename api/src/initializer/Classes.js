const { Clase } = require('../db');

let clases = [ 
    {
        "id": "88994b60-c70e-11ec-96f7-e913400288b6",
        "name": "Javascript",
	    "duration": "duration",
	    "description": "description",
        "url": "https://www.youtube.com/embed/RqQ1d1qEWlE",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
        
    },
    {
        "id": "88994b60-c70e-11ec-96f7-e913400288b7",
        "name": "React.js",
	    "duration": "duration",
	    "description": "description",
        "url": "https://www.youtube.com/embed/RqQ1d1qEWlE",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    },
    {
        "id": "88994b60-c70e-11ec-96f7-e913400288b8",
        "name": "Node.js",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/embed/RqQ1d1qEWlE",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    }
]

const initializeClases= async() =>{
    try {
        
        clases = clases.forEach(async cl =>{
            const clase = {
                id: cl.id,
                name: cl.name,
                duration: cl.duration,
                description: cl.description,
                url: cl.url,
            }           
            Clase.create(clase)
            .then(claseCourse => {
                claseCourse.setCourse(cl.course)
            })
            

        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeClases;