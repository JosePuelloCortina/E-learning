import React from 'react'
import styles from './lessonsVideo.module.css'
import video from '../../Images/videoClase.mp4'
import ReactPlayer from 'react-player'

export default function LessonsVideo({lessons}){
    console.log(lessons, 'esto es lessons en video')

    return(
        <div className={styles.container}>
            <div className={styles.up}>
                <h2>Nombre de la clase</h2>
                {/* <video src={video} controls="true" /> */}
                <ReactPlayer className={styles.video}
                    url='https://www.youtube.com/watch?v=ivdTnPl1ND0'
                    controls='true'
                    
                />
            </div>
            <div className={styles.down}>
                <h2>Contenido escrito</h2>
            </div>
        </div>
    )
}