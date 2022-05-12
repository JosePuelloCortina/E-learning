import React from 'react'
import styles from './adminCategories.module.css'
import {  Link } from "react-router-dom";



export default function AdminCategories(){
    return(
        <Link to = "/AdminPage" >
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Categorias</h2>
        </div>
        <div className={styles.body}>
          Agregar, eliminar y editar categorías de cursos.
        </div>
        </div>
         </Link>
    )
}
