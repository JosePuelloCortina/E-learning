import React from 'react'
import styles from './adminCategories.module.css'
import {  Link } from "react-router-dom";



export default function AdminCategories(){
    return(
        <div className={styles.container}>
        <div className={styles.title}>
            <Link to = "/AdminPage" > <h2>Administrar Categorias</h2> </Link>
        </div>
        <div className={styles.body}>
          
        </div>
        </div>
    )
}
