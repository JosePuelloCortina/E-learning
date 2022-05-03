import React from 'react'
import styles from './lessonsList.module.css'

export default function LessonsList(lessons){
    return(
        <div className={styles.container}>
        {lessons && lessons.map(e => {
            return (
                <p>{e.name}</p>
            )
        })}

        </div>
    )
}