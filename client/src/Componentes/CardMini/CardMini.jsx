import React from 'react'
import styles from './cardMini.module.css'

export default function CardMini ({name}){
    console.log(name, "name")
    return(
        <div className={styles.container}>
        <h4>{name}</h4>
        </div>
    )
}