import React from 'react'

import styles from './profileLateralBar.module.css'
import {Link} from 'react-router-dom'
import img from '../../Images/avatar1.jpg'


export default function ProfileLateralBar(user) {
    
    return(
        <div className={styles.container}>
        
        <h3>{user[0].name}</h3>

        <img src={img} alt='avatar' />
        <h4>{user[0].email}</h4>
        <Link to={"/profile/edit/"+ user[0].id}>
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>
        </div>
    )
}