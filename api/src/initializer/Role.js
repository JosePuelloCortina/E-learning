const { Role } = require('../db');

let roles = [
    {
        "tipo": "alumno"
    },
    {
        "tipo": "instructor"
    },
    {
        "tipo": "admin"
    }
    
]

const initializeRole = async() =>{
    try {
        roles = roles.forEach(async r =>{
            const rol = {
                tipo: r.tipo
            }
            const createRole = await Role.create(rol);
            await createRole;
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeRole; 