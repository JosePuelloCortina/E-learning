import React from 'react'
import styles from './adminEarnings.module.css'
import {Link} from 'react-router-dom'

export default function AdminEarnings(){
    return(
      <Link to="/adminEarnings">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Ganancias</h2>
        </div>
        <div className={styles.body}>
          Administrar ganancias. Modificar porcentaje de comisión. Crear descuentos.
        </div>
        </div>
        </Link>
    )
}