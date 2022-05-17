import React from 'react'
import styles from './adminEarnings.module.css'
import {Link} from 'react-router-dom'

export default function AdminEarnings(){
    return(
      <Link to="/statistics">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Estadísticas</h2>
        </div>
        <div className={styles.body}>
        Ganancias. Usuarios. Cursos.
        </div>
        </div>
        </Link>
    )
}