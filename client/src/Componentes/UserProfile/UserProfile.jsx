import React from 'react'
import styles from './userProfile.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function userProfile(){
    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
            <div><h2>Mi Perfil</h2></div>
            <div className={styles.totalProfile}>
                <div className={styles.profileDetail}>Componente Informacion del perfil</div>
                <div className={styles.cursesDetail}>Componentes Mis cursos</div>
            </div>    
            </div>
            <Footer/>
        </div>
    )
}