import React from 'react'
import style from './myCoursesInstructor.module.css'
import CardMini from '../CardMini/CardMini'
import { useSelector} from "react-redux";

export default function MyCoursesInstructor() {
    const user = useSelector(state => state.user)
    const courses = useSelector(state => state.courses)

    let myCourses = courses.filter(course => course.users.map(user => user.name).includes(user.name))

    return(
        <div className={style.container}>
        <div className={style.title}>
                <h2>Mis Cursos | Instructor |</h2>
            </div>
            <div className={style.cursesInstructor}>
            {myCourses && myCourses.map(e => {
                return(
                    <CardMini key={e.id} name={e.name} />
                )
            })}
            </div>
        </div>
    )
}