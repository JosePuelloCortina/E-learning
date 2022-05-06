const { Course } = require('../db');

let courses = [ 
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack Web Developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "4/5",
        "image": "https://media.bitdegree.org/storage/media/images/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Full-Stack", "Front-End", "Back-End", "React", "Redux", "JavaScript"],
        "price" : "120"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b5",
        "name": "Software Developer",
        "duration": "23",
        "description": " Descripcion del curso softtware developer ",
        "review": "2",
        "progress": "3/5",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb9PcyNX0a2tY_8mxUFW-NemPvNH9DWEfGA&usqp=CAU",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": ["Python", "Java", "Ruby", "Kotlin", "JavaScript"],
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b6",
        "name": "Data Science",
        "duration": "23",
        "description": "Descripcion de del curso Data Science",
        "review": "4",
        "progress": "3/5",
        "image": "https://www.palermo.edu/Archivos_content/2019/cursos/ingenieria/datascience/programa-fundamentos-data-science-up.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Data Science", "Data Analysis", "Data Engineering", "Data Mining", "Data Base"],
        "price" : "110"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine Learning",
        "duration": "25",
        "description": "Curso introductorio a Machine Learning. ",
        "review": "2",
        "progress": "5/5",
        "image": "https://www.revistasaluddigital.com/rsd-backend/public/backend/images/assets/5e5d6de058078495031542.jpg?1",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Machine Learning", "Data Science", "SQL", "MySQL", "PostgreSQL"],
        "price" : "150"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b8",
        "name": "HTML For Babies",
        "duration": "30",
        "description": "Curso báscio e introductorio al Desarrollo Web ",
        "review": "1",
        "progress": "5/5",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0MtZUvggTHRT7O0PjhxmYwY4-HUUEexdReQwNZHC10tCywE-xdKunEjHsQI3diNYXbc&usqp=CAU",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Front-End", "HTML"],
        "price" : "100"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b9",
        "name": "JavaScript Avanzado",
        "duration": "40",
        "description": "Curso para quienes ya cuentan con una base de JS ",
        "review": "3",
        "progress": "5/5",
        "image": "https://arielfuggini.com/static/29a9f86a9bd7efd96ee9ce8b13124303/a41d1/javascript.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Back-End", "JavaScript",],
        "price" : "180"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b2",
        "name": "React",
        "duration": "40",
        "description": "Curso para apasionados en el Desarrollo Web ",
        "review": "4",
        "progress": "5/5",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZMFymn2XpA6ADJyazYfwsSg3H0hta5CdXY68lALo-E4cCybS0kY5h9GqXp56OATnE7M&usqp=CAU",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Front-End", "React"],
        "price" : "180"
    },
    {
        "id": "760c7440-c70e-11ec-96f7-e913400288b3",
        "name": "MySQL",
        "duration": "20",
        "description": "Curso para adquirir herramientas y manejar bases de datos ",
        "review": "5",
        "progress": "5/5",
        "image": "https://blog.endeos.com/wp-content/uploads/2013/11/importar-exportar-mysql-e1383912864301.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Back-End", "MySQL"],
        "price" : "200"
    },
    {
        "id": "160c7440-c70e-11ec-96f7-e913400288b4",
        "name": "Fullstack Web Developer",
        "duration": "12",
        "description": "Modalidad Full Time y Part Time. Apoyo personalizado. Invertimos en ti. 100% Online. Comunidad Henry",
        "review": "5",
        "progress": "casito lo termino",
        "image": "https://crehana-blog.imgix.net/media/filer_public/9a/70/9a70a096-b049-4280-b574-7cb3fe4574f5/full-stack.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Front-End", "Back-End", "Full-Stack", "Ruby", "Swift"],
        "price" : "120"
    },
    {
        "id": "260c7440-c70e-11ec-96f7-e913400288b5",
        "name": "Sotftware Developer",
        "duration": "23",
        "description": "Descripcion del curso sotftware developer. ",
        "review": "2 ",
        "progress": "3/5",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_KwJJnru6RJLqWtgMKeaSdp-AyCrlp1KR9bc0DXl4_jobMTwOn8G6tF33P_XUfFqMoQ&usqp=CAU",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773728",
        "category": ["Ruby", "Python", "Java", "C#", "C++"],
        "price" : "100"
    },
    {
        "id": "360c7440-c70e-11ec-96f7-e913400288b6",
        "name": "Data Science",
        "duration": "23",
        "description": "Descripcion de del curso Data Science.",
        "review": "4",
        "progress": "3/5",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbEkjPWHVuF-94tHzTa-TIAS7jl5DKKrJfQ&usqp=CAU",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Data Science", "SQL", "MySQL", "PostgreSQL", "Data Analysis"],
        "price" : "110"
    },
    {
        "id": "460c7440-c70e-11ec-96f7-e913400288b7",
        "name": "Machine learning",
        "duration": "25",
        "description": "Curso introductorio a Machine Learning. ",
        "review": "5",
        "progress": "5/5",
        "image": "https://edimar.com/wp-content/uploads/2021/03/Que-es-Machine-Learning-Industria.jpg",
        "user": "b65232b0-c6a0-11ec-b926-ff69e9773727",
        "category": ["Machine Learning", "Data Science", "Data Analysis", "Data Mining", "MySQL"],
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