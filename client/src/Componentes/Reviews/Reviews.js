import React from 'react'
import styles from './reviews.module.css'
import { useEffect } from 'react';
import { getAllReviews, getUserById, deleteReview, reportReview
 } from './../../redux/actions/index';
import img from "../../Images/avatar4.jpg";
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Reviews({id}){
    const dispatch = useDispatch();
    const courseId = useParams();
    const allReviews = useSelector( state => state.reviews)
    const courseReviews = allReviews.filter( e => e.idCourse === courseId.id)
    const userId = useSelector(state => state.loggedUsers)
    const userDetail = useSelector(state => state.userDetail)
    const reviewId = courseReviews.filter( e => e.userId === userId[0])
    console.log(courseReviews)


useEffect(()=>{dispatch(getAllReviews())}, [dispatch])
useEffect(()=> {dispatch(getUserById(userId))}, [dispatch])

function handleDelete(e){
    e.preventDefault(e);
    if (window.confirm("¿Desea eliminar este comentario?") === true) {
        dispatch(deleteReview(reviewId[0].id, id))
        alert("Comentario eliminado.");
        dispatch(getAllReviews());
        window.location.reload();
   
      } else {
        alert("Cancelado.")
      }
}

function handleReport(e){
    e.preventDefault(e);
    if (window.confirm("¿Desea reportar este comentario?") === true) {
        dispatch(reportReview(e.target.name));
        console.log(e.target.name)
        alert("Comentario reportado.");
        dispatch(getAllReviews());
      } else {
        alert("Cancelado.")
      }
}

    return(
        <div className={styles.container}>
        <div className={styles.title}>
            <h3>Reseñas sobre este curso</h3>
            </div>
            <div className={styles.cards}>
            { courseReviews && courseReviews.map( e => {
                return (
                    <div className={styles.reviewCard}>
                        <div className={styles.header}>
                        <div className={styles.img}>
                            <img src={e.image ? e.image : img} alt=" "/>
                        </div>
                        <div>
                            <h4>{e.userName.charAt(0).toUpperCase() + e.userName.slice(1)}</h4>
                            <div>
                                {
                                e.score === 1 ? <p>⭐</p> :
                                e.score === 2 ? <p>⭐⭐</p>:
                                e.score === 3 ? <p>⭐⭐⭐</p>:
                                e.score === 4 ? <p>⭐⭐⭐⭐</p>:
                                        <p>⭐⭐⭐⭐⭐</p>
                                }
                            </div>
                            </div>
                            {/* { userDetail.roles[0].tipo === "admin" ||  */
                            e.userId === userId[0] ?
                            <button onClick={handleDelete}>Eliminar</button> :
                             <button onClick={handleReport} name={e.id}>Reportar</button>}
                        </div>
                        <div>
                            <p>{e.coment}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}