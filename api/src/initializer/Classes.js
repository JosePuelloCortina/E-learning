const { Clase } = require('../db');

let clases = [ 
    {  // Curso: Full Stack Web Developer
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
    },
    {
    "id": "88994b60-c70e-11ec-96f7-e913400288b9",
        "name": "HTML",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=MJkdaVFHrto",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    }, // Curso: javascript avanzado 
    { "id": "78994b60-c70e-11ec-96f7-e913400288b1",
        "name": "Scope",
        "duration": "duration",
        "description": "description",
        "url": "https://youtu.be/u9Pc8KlSoIU",
        "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Hoisting",
    "duration": "duration",
    "description": "description",
    "url": "https://youtu.be/nEp0l_axRUM",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Coerción de datos",
    "duration": "duration",
    "description": "description",
    "url": "https://youtu.be/TGwdJOexQLs",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b4",
    "name": "Closures",
    "duration": "duration",
    "description": "description",
    "url": "https://youtu.be/egdxz2SZEKQ",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b5",
    "name": "El uso de This en JavaScript",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=QK1zHFwUI90&list=PLyBd7TyyK5mqBGx31fC5tvqOi6UbY2rMU&index=6",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { 
    "id": "78994b60-c70e-11ec-96f7-e913400288b6",
    "name": "Set Y Get ECMA6",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=iPw-5EOqh5Y&list=PLyBd7TyyK5mqBGx31fC5tvqOi6UbY2rMU&index=9",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },

   
    // Curso: Software Development 
    { "id": "68994b60-c70e-11ec-96f7-e913400288b1",
        "name": "What is Software Development",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=pquPUX1EihM",
        "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Guide To Becoming A Self-Taught Software Developer",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=J6rVaFzOEP8",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Software Development Lifecycle in 9 minutes!",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=i-QyW8D3ei0",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b4",
    "name": "The Systems Development Environment",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=zhUbpqydHS0",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    }, //Curso Data Science
    { "id": "58994b60-c70e-11ec-96f7-e913400288b1",
    "name": "CIENCIA DE DATOS en 7 Minutos ⚡️",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=dH5v_mcvlXM",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Qué es DATA SCIENCE y para qué SIRVE",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=K0vyX9r-088",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Cómo Empezar en DataScience",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=HDVZKT7eKiU&list=PLA6LhKSShduvWZWkByb2m-kwba0XAFlmc&index=2",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b4",
    "name": "Qué debe SABER un DATA SCIENTIST ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=iE3OyEO2f8g&list=PLA6LhKSShduvWZWkByb2m-kwba0XAFlmc&index=4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },


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