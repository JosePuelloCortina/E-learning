const { Buy } = require('../db');

let buys = [ 
    {
        "total_price": 110,
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
        "courseId": "360c7440-c70e-11ec-96f7-e913400288b6",
        "courseName": "Data Science Beginner",
        "quantity" : 1 
    },
    {
        "total_price": 120,
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
        "courseId": "760c7440-c70e-11ec-96f7-e913400288b4",
        "courseName": "Fullstack Web Developer",
        "quantity" : 1 
    },
    {
        "total_price": 150,
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
        "courseId": "460c7440-c70e-11ec-96f7-e913400288b7",
        "courseName": "Machine learning Advanced",
        "quantity" : 1 
    },
    {
        "total_price": 110,
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
        "courseId": "360c7440-c70e-11ec-96f7-e913400288b6",
        "courseName": "Data Science Beginner",
        "quantity" : 1 
    },
    {
        "total_price": 120,
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
        "courseId": "760c7440-c70e-11ec-96f7-e913400288b4",
        "courseName": "Fullstack Web Developer",
        "quantity" : 1 
    }
]

const initializeBuys = async() =>{
    try {
        
        buys = buys.forEach(async b =>{
            Buy.create({
                courseName: b.courseName,
                discount: 0,
                pay_method: "tarjeta",
                total_price: b.total_price,
                quantity: b.quantity
              }) //crea la compra
              .then(buyCourse => {
                buyCourse.setCourse(b.courseId)
                buyCourse.setUser(b.userId)    
              }) //relaciona la compra con el curso y el usuario
              
              .catch(error =>{
                console.log(error)
              })
            })  
        
    } catch (error) {
        console.log(error)
        
    }

}
module.exports = initializeBuys;