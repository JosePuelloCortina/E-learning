import React from 'react'
import styles from './lessonsList.module.css'
import {Link} from 'react-router-dom'

export default function LessonsList({lessons, review, setReview}){
    console.log(lessons, 'esto es lessons')

    function handleReview(e){
        e.preventDefault(e);
        setReview(true)
        
    }

    return(
        <div className={styles.container}>
        <h3>Clases  ||  Mi progreso</h3>
        {lessons ? lessons.map(e => {
            return (
                <div className={styles.classes}>
                <p>{e.name}</p>
                    <input type='checkbox'/>
                    </div>
                
            )
        }): null}
        <br/>
        <h5>Tus comentarios nos ayudan a mejorar y ayudan a otros usuarios a elegir mejor.</h5> 
        <h5>Deja tu reseña sobre este curso.</h5>
        <h4 onClick={handleReview}>⭐Click aquí para calificar⭐</h4>
 
        </div>
    )
}