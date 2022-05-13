const { Review } = require('../db');

let reviews = [
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b4",
        "score":"5",
        "coment":"Muy bueno!",
        "userName":"valentina",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
       
    }, 
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b4",
        "score":"4",
        "coment":"Me gustó mucho.",
        "userName":"agustin",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
      
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b5",
        "score":"3",
        "coment":"Estuvo bien, pero podría haber estado mejor.",
        "userName":"agustin",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
        
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b5",
        "score":"4",
        "coment":"Me pareció muy bueno.",
        "userName":"valentina",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
       
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b6",
        "score":"5",
        "coment":"Genial!",
        "userName":"valentina",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773726",
       
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b6",
        "score":"4",
        "coment":"Estuvo bueno, muy completo.",
        "userName":"agustin",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
        
    },
 ];


const initializeReviews= async() =>{
    try {
        
        reviews = reviews.forEach(async rev =>{
            const review  = {
                idCourse:rev.idCourse,
                score:rev.score,
                coment:rev.coment,
                userName:rev.userName,
                userId: rev.userId,
    
            }           
            Review.create(review)
            .then(reviewCourse => {
                reviewCourse.setCourse(rev.idCourse)
            })

        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeReviews;