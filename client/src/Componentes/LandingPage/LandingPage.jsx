import React from 'react'
import {Link} from 'react-router-dom'
import styles from './landingPage.module.css'

export default function LandingPage (){
    return (
        <div className={styles.container}>

            <div className={styles.text}>
            <h1>AkademIT</h1>
            <h2>Paso a paso construyendo tu futuro.</h2>
            </div>
            <div>
                <Link to="/home">
                <button className={styles.landingButton}>Comenzar ahora!</button>
                </Link>
            </div>
        
            
        </div>
    )
}
