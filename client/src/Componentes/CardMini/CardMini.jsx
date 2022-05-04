import React from 'react'
import styles from './cardMini.module.css'

export default function CardMini ( {name, img} ){
    console.log(name, "name")
    return(
        <div className={styles.container}>
        <div className={styles.image}>
            <img src={img} alt=''/>
        </div>
        <div className={styles.name}>
         <p>{name}</p>
        </div>
        
        </div>
    )
}