const { Course } = require('../db');

let courses = [ 
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack Web Developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "4/5",
        "image": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Front-End",
        "price" : "120"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b5",
        "name": "Software Developer",
        "duration": "23",
        "description": " Descripcion del curso softtware developer ",
        "review": "2",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": "Back-End",
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b6",
        "name": "Data Science",
        "duration": "23",
        "description": "Descripcion de del curso Data Science",
        "review": "4",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Full-Stack",
        "price" : "110"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine Learning",
        "duration": "25",
        "description": "Curso introductorio a Machine Learning. ",
        "review": "2",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Full-Stack",
        "price" : "150"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b8",
        "name": "HTML For Babies",
        "duration": "30",
        "description": "Curso báscio e introductorio al Desarrollo Web ",
        "review": "1",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Front-End",
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b9",
        "name": "JavaScript Avanzado",
        "duration": "40",
        "description": "Curso para quienes ya cuentan con una base de JS ",
        "review": "3",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Back-End",
        "price" : "180"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b2",
        "name": "React",
        "duration": "40",
        "description": "Curso para apasionados en el Desarrollo Web ",
        "review": "4",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Back-End",
        "price" : "180"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b3",
        "name": "MySQL",
        "duration": "20",
        "description": "Curso para adquirir herramientas y manejar bases de datos ",
        "review": "5",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Back-End",
        "price" : "200"
    },
    {
        "id": "160c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack Web Developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "casito lo termino",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Front-End",
        "price" : "120"
    },
    {
        "id": "260c7440-c70e-11ec-96f7-e913400288b5",
        "name": "Sotftware Developer",
        "duration": "23",
        "description": "Descripcion del curso sotftware developer. ",
        "review": "2 ",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": ["Back-End", "Front-End"],
        "price" : "100"
    },
    {
        "id": "360c7440-c70e-11ec-96f7-e913400288b6",
        "name": "Data Science",
        "duration": "23",
        "description": "Descripcion de del curso Data Science.",
        "review": "4",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Full-Stack",
        "price" : "110"
    },
    {
        "id": "460c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine learning",
        "duration": "25",
        "description": "Curso introductorio a Machine Learning. ",
        "review": "5",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "Full-Stack",
        "price" : "150"
    },

]

const initializeCourses = async() =>{
    try {
        
        courses = courses.forEach(async c =>{
            const course = {
                id: c.id,
                name : c.name,
                duration : c.duration,
                description : c.description,
                review: c.review,
                progress: c.progress, 
                image: c.image,
                price: c.price
            }           
            const createCourse = await Course.create(course);
            await createCourse.addUser(c.user)
            await createCourse.addCategory(c.category)
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeCourses;