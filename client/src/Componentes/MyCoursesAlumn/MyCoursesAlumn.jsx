import React from 'react'
import styles from './myCoursesAlumn.module.css'
import CardMini from '../CardMini/CardMini'
import { useSelector} from "react-redux";


export default function MyCoursesAlumn() {
    
    const user = useSelector(state => state.user)
    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Cursos | Alumno |</h2>
        </div>
        <div className={styles.curses}>
        {user.buys.map((b) =>{
            return(
                <CardMini name={b.courseId}/>
            )
        })}
        
        </div>
        </div>
    )
}