import React from 'react'
import styles from './cardMini.module.css'
import { Link } from "react-router-dom";

export default function CardMini ( {name, img, id} ){
    console.log(name, "name")
    return(
        <Link className={styles.linkDetail} to={`/courselessons/${id}`}>
        <div className={styles.container}>
        <div className={styles.image}>
            <img src={img} alt=''/>
        </div>
        <div className={styles.name}>
         <p>{name}</p>
        </div>
        
        </div>
        </Link>
    )
}