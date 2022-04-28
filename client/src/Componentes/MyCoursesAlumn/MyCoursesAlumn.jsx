import React from 'react'
import styles from './myCoursesAlumn.module.css'
import CardMini from '../CardMini/CardMini'

export default function MyCoursesAlumn() {
    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Cursos | Alumno |</h2>
        </div>
        <div className={styles.curses}>
        <CardMini/>
        <CardMini/>
        <CardMini/>
        <CardMini/>
        </div>
        </div>
    )
}