import React from 'react'
import styles from './adminReviews.module.css'
import {Link} from 'react-router-dom'

export default function AdminReviews(){
    return(
      <Link to="/adminReviews">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Reseñas</h2>
        </div>
        <div className={styles.body}>
          Moderar reseñas. Registro de comentarios reportados como inapropiados. Eliminar reseñas.
        </div>
        </div>
        </Link>
    )
}