import React from 'react'
import styles from './adminUsers.module.css'
import {Link} from 'react-router-dom'

export default function AdminUsers(){
    return(
        <Link to="/sdjkahskjdak">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Usuarios</h2>
        </div>
        <div className={styles.body}>
          Bloquear usuarios.
        </div>
        </div>
        </Link>
    )
}