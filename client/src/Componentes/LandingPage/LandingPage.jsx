import React from 'react'
import {Link} from 'react-router-dom'
import styles from './landingPage.module.css'

export default function LandingPage (){
    return (
        <div className={styles.container}>

            <div className={styles.text}>
            <h1>NOMBRE</h1>
            <h2>Encontrá todos tus cursos IT acá</h2>
            </div>
            <div>
                <Link to="/home">
                <button className={styles.button}>Comenzar ahora!</button>
                </Link>
            </div>
        
            
        </div>
    )
}