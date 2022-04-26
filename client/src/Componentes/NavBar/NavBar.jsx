import React from "react";
import styles from './NavBar.module.css'

export default function Home(){

    return(
        <div className={styles.navBar}>
            <h1>Logo</h1>
            <input type="text" placeholder="Buscar cursos..."/>
            <button>Ingresar</button>
        </div>
    )
}
