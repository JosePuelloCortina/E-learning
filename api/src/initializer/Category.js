const { Category } = require('../db');

let categorias = [
    {
        "name": "Front-End"
    },
    {
        "name": "Back-End"
    },
    {
        "name": "Full-Stack"
    },
    {
        "name": "Mobile"
    },
    {
        "name": "Data Science"
    },
    {
        "name": "Machine Learning"
    },
    {
        "name": "DevOps"
    },
    {
        "name": "Data Base"
    },
    {
        "name": "Data Mining"
    },
    {
        "name": "Data Analysis"
    },
    {
        "name": "Data Engineering"
    },
    {
        "name": "React"
    },
    {
        "name": "Angular"
    },
    {
        "name": "Vue"
    },
    {
        "name": "Node"
    },
    {
        "name": "Express"
    },
    {
        "name": "MongoDB"
    },
    {
        "name": "MySQL"
    },
    {
        "name": "PostgreSQL"
    },
    {
        "name": "SQL"
    },
    {
        "name": "NoSQL"
    },
    {
        "name": "Firebase"
    },
    {
        "name": "C++"
    },
    {
        "name": "C#"
    },
    {
        "name": "Java"
    },
    {
        "name": "Python"
    },
    {
        "name": "Ruby"
    },
    {
        "name": "Swift"
    },
    {
        "name": "Kotlin"
    },
    {
        "name": "PHP"
    },
    {
        "name": "JavaScript"
    },
    {
        "name": "HTML"
    },
    {
        "name": "CSS"
    },
    {
        "name": "Bootstrap"
    },
    {
        "name": "Materialize"
    },
    {
        "name": "SASS"
    },
    {
        "name": "LESS"
    },
    {
        "name": "Git"
    },
    {
        "name": "GitHub"
    },
    {
        "name": "GitLab"
    },
    {
        "name": "GitFlow"
    },
    {
        "name": "Redux"
    },

]

const initializeCategory = async() =>{
    try {
        categorias = categorias.forEach(async c =>{
            const categoria = {
                name: c.name
            }
            const createCategorias = await Category.create(categoria);
            await createCategorias;
        })
        
    } catch (error) {
        console.log(error) 
        
    }
}
module.exports = initializeCategory; 