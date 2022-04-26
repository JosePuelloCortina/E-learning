import React from 'react'
import {Link} from 'react-router-dom'
import styles from './landingPage.module.css'

export default function LandingPage (){
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>TITULO</h1>
            </div>
            <div >
            <Link to="/home">
            <button className={styles.button}>Comienza ahora!</button>
            </Link>
            </div>
            
        </div>
    )
}