const { User, Role } = require('../db');

let users = [
    {
        "name": "valentina",
        "password": "vale123",
        "email": "vale@vale.com",
        "role": "alumno"
    },
    {
        "name": "albano",
        "password": "a123",
        "email": "alba@alba.com",
        "role": "instructor"
    },
    {
        "name": "tomas",
        "password": "t123",
        "email": "tomas@tomas.com",
        "role": "admin"
    }
]

const initializeUser = async() =>{
    try {
        
        users = users.forEach(async u =>{
            const user = {
                name: u.name,
                password: u.password,
                email: u.email,
            }           
            const createUser = await User.create(user);
            await createUser.addRoles(u.role)
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeUser;