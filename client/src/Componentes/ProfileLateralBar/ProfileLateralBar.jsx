import React from 'react'
import styles from './profileLateralBar.module.css'
import {Link} from 'react-router-dom'
import img from '../../Images/avatar1.jpg'

export default function profileLateralBar() {
    
    return(
        <div className={styles.container}>
        
        <h3>Andrea Hubacek</h3>

        <img src={img} alt='avatar' />
        <h4>hubacekk@gmail.com</h4>
        <Link to="/editProfile">
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>
        </div>
    )
}