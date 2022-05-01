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
    }
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