const { Review, Course } = require('../db');

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
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b3",
        "score":"1",
        "coment":"No cumple con lo prometido.",
        "userName":"andrea",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773728",
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b8",
        "score":"5",
        "coment":"Excelente, muy buena introduccion a HTML.",
        "userName":"andrea",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773728",
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b2",
        "score":"3",
        "coment":"Esta bien.",
        "userName":"andrea",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773728",
    },
    {
        "idCourse":"460c7440-c70e-11ec-96f7-e913400288b7",
        "score":"2",
        "coment":"No llega a Advance.",
        "userName":"andrea",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773728",
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b7",
        "score":"5",
        "coment":"Excelente.",
        "userName":"andrea",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773728",
    },
    {
        "idCourse":"760c7440-c70e-11ec-96f7-e913400288b9",
        "score":"4",
        "coment":"Muy completo.",
        "userName":"agustin",
        "userId": "b65232b0-c6a0-11ec-b926-ff69e9773723",
    },
    {
        "idCourse":"360c7440-c70e-11ec-96f7-e913400288b6",
        "score":"1",
        "coment":"Muy lento, no me gusto.",
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
                Course.findOne({
                    where: {
                        id: review.idCourse
                    },
                    include: [{
                        model: Review
                    }]
                })
                .then(course => {
                reviewCourse.setCourse(review.idCourse)
                let valueReview = course.dataValues.reviews.reduce((a, b) => a + b.dataValues.score, 0)
                course.update({
                  review: (valueReview + Number(review.score)) / (course.dataValues.reviews.length + 1)
                })
              })
            })
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = initializeReviews;