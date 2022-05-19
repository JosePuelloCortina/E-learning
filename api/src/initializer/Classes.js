const { Clase } = require('../db');
// const video = require( "../../Video/videoClase.mp4");
let clases = [ 
    {  // Curso: Full Stack Web Developer
        "id": "88994b60-c70e-11ec-96f7-e913400288b6",
        "name": "Javascript",
	    "duration": "duration",
	    "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
        
    },
    {
        "id": "88994b60-c70e-11ec-96f7-e913400288b7",
        "name": "React.js",
	    "duration": "duration",
	    "description": "description",
        "url":"https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    },
    {
        "id": "88994b60-c70e-11ec-96f7-e913400288b8",
        "name": "Node.js",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    },
    {
    "id": "88994b60-c70e-11ec-96f7-e913400288b9",
        "name": "HTML",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b4"
    }, // Curso: javascript avanzado 
    { "id": "78994b60-c70e-11ec-96f7-e913400288b1",
        "name": "Scope",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Hoisting",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Coerción de datos",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b4",
    "name": "Closures",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { "id": "78994b60-c70e-11ec-96f7-e913400288b5",
    "name": "El uso de This en JavaScript",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    { 
    "id": "78994b60-c70e-11ec-96f7-e913400288b6",
    "name": "Set Y Get ECMA6",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b9"
    },
    // Curso: Software Development 
    { "id": "68994b60-c70e-11ec-96f7-e913400288b1",
        "name": "What is Software Development",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Guide To Becoming A Self-Taught Software Developer",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Software Development Lifecycle in 9 minutes!",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "68994b60-c70e-11ec-96f7-e913400288b4",
    "name": "The Systems Development Environment",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b5"
    }, //Curso Data Science
    { "id": "58994b60-c70e-11ec-96f7-e913400288b1",
    "name": "CIENCIA DE DATOS en 7 Minutos ⚡️",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Qué es DATA SCIENCE y para qué SIRVE",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Cómo Empezar en DataScience",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "58994b60-c70e-11ec-96f7-e913400288b4",
    "name": "Qué debe SABER un DATA SCIENTIST ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b6"
    },
    , //Curso Machine Learning
    { "id": "48994b60-c70e-11ec-96f7-e913400288b1",
    "name": "INTRODUCCIÓN AL CURSO: MACHINE LEARNING CON PYTHON",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "48994b60-c70e-11ec-96f7-e913400288b2",
    "name": "INTRODUCCIÓN AL IDE SPYDER",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "48994b60-c70e-11ec-96f7-e913400288b3",
    "name": "INTRODUCCIÓN A LA LIBRERÍA NUMPY DE PYTHON - PARTE 1",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "48994b60-c70e-11ec-96f7-e913400288b4",
    "name": "INTRODUCCIÓN A LA LIBRERÍA NUMPY DE PYTHON - PARTE 2 ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "48994b60-c70e-11ec-96f7-e913400288b5",
    "name": "INTRODUCCIÓN A LA LIBRERÍA PANDAS DE PYTHON ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "760c7440-c70e-11ec-96f7-e913400288b7"
    }, //Curso Data Science Beginner
    { "id": "38994b60-c70e-11ec-96f7-e913400288b1",
    "name": "CIENCIA DE DATOS en 7 Minutos ⚡️",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "360c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "38994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Qué es DATA SCIENCE y para qué SIRVE",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "360c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "38994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Cómo Empezar en DataScience",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "360c7440-c70e-11ec-96f7-e913400288b6"
    },
    { "id": "38994b60-c70e-11ec-96f7-e913400288b4",
    "name": "Qué debe SABER un DATA SCIENTIST ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "360c7440-c70e-11ec-96f7-e913400288b6"
    }, //Machine learning Advanced
    { "id": "28994b60-c70e-11ec-96f7-e913400288b1",
    "name": "INTRODUCCIÓN AL CURSO: MACHINE LEARNING CON PYTHON",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "460c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "28994b60-c70e-11ec-96f7-e913400288b2",
    "name": "INTRODUCCIÓN AL IDE SPYDER",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "460c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "28994b60-c70e-11ec-96f7-e913400288b3",
    "name": "INTRODUCCIÓN A LA LIBRERÍA NUMPY DE PYTHON - PARTE 1",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "460c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "28994b60-c70e-11ec-96f7-e913400288b4",
    "name": "INTRODUCCIÓN A LA LIBRERÍA NUMPY DE PYTHON - PARTE 2 ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "460c7440-c70e-11ec-96f7-e913400288b7"
    },
    { "id": "28994b60-c70e-11ec-96f7-e913400288b5",
    "name": "INTRODUCCIÓN A LA LIBRERÍA PANDAS DE PYTHON ",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "460c7440-c70e-11ec-96f7-e913400288b7"
    },
    // Curso: Sotftware Developer for advanced students
    { "id": "18994b60-c70e-11ec-96f7-e913400288b1",
        "name": "What is Software Development",
        "duration": "duration",
        "description": "description",
        "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
        "course": "260c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "18994b60-c70e-11ec-96f7-e913400288b2",
    "name": "Guide To Becoming A Self-Taught Software Developer",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "260c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "18994b60-c70e-11ec-96f7-e913400288b3",
    "name": "Software Development Lifecycle in 9 minutes!",
    "duration": "duration",
    "description": "description",
    "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "260c7440-c70e-11ec-96f7-e913400288b5"
    },
    { "id": "18994b60-c70e-11ec-96f7-e913400288b4",
    "name": "The Systems Development Environment",
    "duration": "duration",
    "description": "description",
    "url":"https://www.youtube.com/watch?v=Omss76sWmT4",
    "course": "260c7440-c70e-11ec-96f7-e913400288b5"
    },
 // Curso: MySQL
 { "id": "08994b60-c70e-11ec-96f7-e913400288b1",
 "name": "Presentación del curso",
 "duration": "duration",
 "description": "description",
 "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
 "course": "760c7440-c70e-11ec-96f7-e913400288b3"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288b2",
"name": "Introducción al curso SQL",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b3"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288b3",
"name": "Claúsulas y operadores",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b3"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288b4",
"name": "Cláusula Order By. Ordenando registros.",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b3"
}, 
 // Curso: React
 { "id": "08994b60-c70e-11ec-96f7-e913400288c1",
 "name": "Introducción a React",
 "duration": "duration",
 "description": "description",
 "url": "https://www.youtube.com/watch?v=Omss76sWmT4",
 "course": "760c7440-c70e-11ec-96f7-e913400288b2"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288c2",
"name": "Create React App",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b2"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288c3",
"name": "Sintaxis JSX ",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b2"
},
{ "id": "08994b60-c70e-11ec-96f7-e913400288c4",
"name": "Componentes",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course":"760c7440-c70e-11ec-96f7-e913400288b2" 
},
// Curso:"Fullstack Web Developer Expertise"
{ "id": "18994b60-c70e-11ec-96f7-e913400288d1",
"name": "What is Software Development",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "160c7440-c70e-11ec-96f7-e913400288b4"
},
{ "id": "18994b60-c70e-11ec-96f7-e913400288d2",
"name": "Guide To Becoming A Self-Taught Software Developer",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "160c7440-c70e-11ec-96f7-e913400288b4"
}, 
{ "id": "18994b60-c70e-11ec-96f7-e913400288d3",
"name": "Software Development Lifecycle in 9 minutes!",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "160c7440-c70e-11ec-96f7-e913400288b4"
},
{ "id": "18994b60-c70e-11ec-96f7-e913400288d4",
"name": "The Systems Development Environment",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "160c7440-c70e-11ec-96f7-e913400288b4"
},// Curso:"HTML FOR BABIES"
{ "id": "18994b60-c70e-11ec-96f7-e913400288e1",
"name": "Inroducción a HTML 5",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b8"
},
{ "id": "18994b60-c70e-11ec-96f7-e913400288e2",
"name": "Conceptos básicos",
"duration": "duration",
"description": "description",
"url":"https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b8"
}, 
{ "id": "18994b60-c70e-11ec-96f7-e913400288e3",
"name": "Nuevos elementos de estructura en HTML5",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b8"
},
{ "id": "18994b60-c70e-11ec-96f7-e913400288e4",
"name": "Estructura del cuerpo y nuevos elementos",
"duration": "duration",
"description": "description",
"url": "https://www.youtube.com/watch?v=Omss76sWmT4",
"course": "760c7440-c70e-11ec-96f7-e913400288b8"
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