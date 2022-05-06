import React from 'react'
import styles from './reviews.module.css'
import { useEffect } from 'react';
import { getAllReviews } from './../../redux/actions/index';

import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Reviews({id}){
    const dispatch = useDispatch();
    const courseId = useParams();
    const allReviews = useSelector( state => state.reviews)
    const courseReviews = allReviews.filter( e => e.idCourse === courseId.id)
    console.log(courseId, "reviewsssss")

useEffect(()=>{dispatch(getAllReviews())}, [dispatch])
    return(
        <div className={styles.container}>
        <div className={styles.title}>
            <h3>Reseñas sobre este curso</h3>
            </div>
            <div className={styles.cards}>
            { courseReviews && courseReviews.map( e => {
                return (
                    <div className={styles.reviewCard}>
                        <div>
                            <h4>{e.userName}</h4>
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