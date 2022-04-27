import React from 'react'
import styles from './editProfile.module.css'
import {Link} from 'react-router-dom'


export default function profileLateralBar() {
    
    return(
        <div className={styles.container}>
            <div className={styles.editPanel}>
            <div className={styles.left}>
                <div>
                    <label>Nombre y Apellido</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text"/>
                </div>
                <button>Guardar Cambios</button>
            </div>

            <div className={styles.right}>
                <div>
                    <label>Nueva Contraseña</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirmar Nueva Contraseña</label>
                    <input type="password"/>
                </div>
                <button>Cambiar Contraseña</button>
                </div>
            </div>
    
        </div>
    )
}