import React from 'react'

import styles from './profileLateralBar.module.css'
import {Link} from 'react-router-dom'
import img from '../../Images/avatar4.jpg'


export default function ProfileLateralBar({name, email, id, categories, image}) {
    
    return(
        <div className={styles.container}>
        
        <h3>{name}</h3>
        
        <img src={image.length? image:img} alt='avatar' />
        
        <h4>{email}</h4>
        <Link to={"/profile/edit/"+ id}>
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>

        <h3>Intereses</h3>
        {categories && categories.map((category) => {
            return(
                <div key={category.name} className={styles.categories}>
                    <h5>{category.name}</h5>
                </div>
            )
        })}
        </div>
    )
}