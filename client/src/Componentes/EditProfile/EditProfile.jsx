import React, {useState} from 'react'
import styles from './editProfile.module.css'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'



export default function editProfile() {

    
    return(
        <div>
        <NavBar/>
        <div className={styles.container}>
        <div><h2>Mis Datos</h2></div>
            <div className={styles.editPanel}>

            <div className={styles.cont2}>
            <div className={styles.left}>
                <div>
                    <label>Nombre y Apellido</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text"/>
                </div>
            </div>

            <div className={styles.right}>
                <div>
                    <label>Nueva Contraseña</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type="password"/>
                </div>
                
                </div>
                </div>
                <div>
                <button className={styles.save}>Guardar Cambios</button>
                </div>
            </div>
    
        </div>
        <Footer/>
        </div>
    )
}