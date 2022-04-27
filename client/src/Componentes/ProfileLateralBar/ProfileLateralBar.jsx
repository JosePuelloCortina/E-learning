import React from 'react'
import styles from './profileLateralBar.module.css'
import {Link} from 'react-router-dom'


export default function profileLateralBar() {
    
    return(
        <div className={styles.container}>
        
        <h3>Andrea Hubacek</h3>

        <img src='.../Images.avatar1.jpg' alt='avatar' />
        <Link to="/editProfile">
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>
        </div>
    )
}