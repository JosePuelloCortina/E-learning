import React from 'react'
import styles from './lessonsList.module.css'

export default function LessonsList({lessons}){
    console.log(lessons, 'esto es lessons')

    function handleClick(e){
        e.preventDefault(e);
        
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

        </div>
    )
}