import React from 'react'
import styles from './myPurchases.module.css'

export default function MyPurchases(user){
    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Compras</h2>
        <table className={styles.table} border="1" >
        <tbody>
            <tr>
            <th width='65%'>Curso</th>
            <th>Descuento</th>
            <th>Precio Final</th>
            </tr>
            <tr>
            <td width='65%'>Ej: Data Science</td>
            <td>Sin descuento</td>
            <td>$100</td>
            </tr>
        
        </tbody>
        </table>
        
      </div>

        </div>
    )
}