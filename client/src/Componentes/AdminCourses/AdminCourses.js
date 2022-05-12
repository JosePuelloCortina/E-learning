import React from 'react'
import styles from './adminCourses.module.css'
import {Link} from 'react-router-dom'

export default function AdminCourses(){
    return(
        <Link to="/sdjkahskjdak">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Cursos</h2>
        </div>
        <div className={styles.body}>
          Aprobar nuevos cursos. Deshabilitar cursos.
        </div>
        </div>
        </Link>
    )
}