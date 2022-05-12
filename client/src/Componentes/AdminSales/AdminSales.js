import React from 'react'
import styles from './adminSales.module.css'
import {Link} from 'react-router-dom'

export default function AdminSales(){
    return(
      <Link to="/sdjkahskjdak">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Ventas</h2>
        </div>
        <div className={styles.body}>
          Administrar ganancias. Pagar instructores. Registro de ventas y donaciones.
        </div>
        </div>
        </Link>
    )
}