import React from "react";
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <div className={styles.navBar}>
            <h1>Logo</h1>
            <input type="text" placeholder="Buscar cursos..."/>
            <Link to="/user"> <button>Ingresar</button> </Link>
        </div>
    )
}
