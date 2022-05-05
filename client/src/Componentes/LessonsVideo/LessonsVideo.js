import React from 'react'
import styles from './lessonsVideo.module.css'
import video from '../../Images/videoClase.mp4'
import ReactPlayer from 'react-player'

export default function LessonsVideo({currentLesson, course}){
    console.log(course, 'esto es course')
    const {name, description, duration, url} = currentLesson

    if(!currentLesson.name){
        return (
            <div className={styles.container}>
            <div className={styles.up}>
                <h2>Bienvenido a mi curso {course.name}</h2>
                <img src={course.image} alt={course.name}/>
                <h2>{course.description}</h2>
            </div>
            <div className={styles.down}>
            </div>
        </div>
        )
    }
    return(
        <div className={styles.container}>
            <div className={styles.up}>
                
                <h2>{name}</h2>
                {/* <video src={video} controls="true" /> */}
                <ReactPlayer className={styles.video}
                    url={url}
                    controls='true'
                    
                />
            </div>
            <div className={styles.down}>
                <h2>{description}</h2>
                <h3>{duration}</h3>
            </div>
        </div>
    )
}