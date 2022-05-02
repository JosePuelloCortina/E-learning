import React from 'react'
import styles from './myCoursesAlumn.module.css'
import CardMini from '../CardMini/CardMini'

import { useSelector} from "react-redux";


export default function MyCoursesAlumn() {
    
    const user = useSelector(state => state.user)
    const courses = useSelector(state => state.courses)
    console.log(user, "user")

    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Cursos | Alumno |</h2>
        </div>
        <div className={styles.curses}>
        {user.buys && user.buys.map(e => {
            return(
                <CardMini name={e.courseName} />
            )
        })}




        {/* {user.buys && user.buys.map((b) =>{
            console.log(b, "esto es b")
            let filterCompras  = courses.filter((c) => c.id === b.courseId)
            console.log(filterCompras, "esto es filterCompras")
            filterCompras.map((c) => {
                console.log(c.name, "esto es c")
                return(
                    <CardMini name={c.name}/>
                )
            })
        })} */}
        

        </div>
        </div>
    )
}