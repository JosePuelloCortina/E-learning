import React from 'react'
import styles from './reviews/reviews.module.css'
import { useEffect } from 'react';
import { getAllReviews } from './../../redux/actions/index';

import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Reviews(){
    const dispatch = useDispatch();
    const courseId = useParams();
    const allReviews = useSelector( state => state.reviews)
    const courseReviews = allReviews.filter( e => e.courseId === courseId)

useEffect(()=>{dispatch(getAllReviews)})
    return(
        <div className={styles.container}>
            <h3>Reseñas sobre este curso</h3>
            { courseReviews && courseReviews.map( e => {
                return (
                    <div>
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
    )
}