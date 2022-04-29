const { Course } = require('../db');

let courses = [ 
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack web developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "casito lo termino",
        "image": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "frontend",
        "price" : "120"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b5",
        "name": "sotftware developer",
        "duration": "23",
        "description": " descripcion del curso sotftware developer ",
        "review": "2",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": "backend",
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b6",
        "name": "data science data science",
        "duration": "23",
        "description": "descripcion de del curso data science",
        "review": "4",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "fullstack",
        "price" : "110"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine learning",
        "duration": "25",
        "description": "curso introductorio a Machine Learning para aprender lo esencial ",
        "review": "2",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "fullstack",
        "price" : "150"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b8",
        "name": "Html for babies",
        "duration": "30",
        "description": "curso báscio e introductorio al desarrollo web ",
        "review": "1",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "frontend",
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b9",
        "name": "JavaScript avanzado",
        "duration": "40",
        "description": "Curso para aquellos expertos en JS ",
        "review": "3",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "backend",
        "price" : "180"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b2",
        "name": "React",
        "duration": "40",
        "description": "Curso para apacionados en el desarrollo web ",
        "review": "4",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "backend",
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
        "category": "backend",
        "price" : "200"
    },
    {
        "id": "160c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack web developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "casito lo termino",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "frontend",
        "price" : "120"
    },
    {
        "id": "260c7440-c70e-11ec-96f7-e913400288b5",
        "name": "sotftware developer",
        "duration": "23",
        "description": " descripcion del curso sotftware developer ",
        "review": "2 ",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": "backend",
        "price" : "100"
    },
    {
        "id": "360c7440-c70e-11ec-96f7-e913400288b6",
        "name": "data science",
        "duration": "23",
        "description": "descripcion de del curso data science",
        "review": "4",
        "progress": "3/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "fullstack",
        "price" : "110"
    },
    {
        "id": "460c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine learning",
        "duration": "25",
        "description": "curso introductorio a Machine Learning para aprender lo esencial ",
        "review": "5",
        "progress": "5/5",
        "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": "fullstack",
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