import React from "react";
import styles from './CourseCard.module.css'

export default function CourseCard({name}) {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://imaginaformacion.com/tutoriales/tutorial_78_imagen_1.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <div >
                    <p><strong>{name}</strong></p>
                    <p>Categorias</p>
                </div>
                <div >
                    <p>4⭐</p>
                    <p><strong>$20</strong></p>
                </div>
            </div>
        </div>
    )
}