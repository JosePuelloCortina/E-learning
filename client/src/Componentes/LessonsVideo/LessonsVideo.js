import React from 'react'
import styles from './lessonsVideo.module.css'
import video from '../../Images/videoClase.mp4'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import { useParams } from "react-router";
import { useSelector } from 'react-redux'

export default function LessonsVideo({currentLesson, course, user, id, idCourse  }){
    console.log(course, 'esto es course')
    const {name, description, duration, url} = currentLesson
    const classState = useSelector((state) => state.classDetail);
    const navigate = useNavigate();
    

    function handleSubmitCourse(e) {
        e.preventDefault(e);
        navigate(`/editCourse/${idCourse}`);
      }

    function handleSubmitClass(e) {
        e.preventDefault(e);
        navigate(`/editClass/${classState.id}`);
      }

   



    if(!currentLesson.name) {
        return (
            <div className={styles.container}>
            <div className={styles.up}>
                <h2>Bienvenido a mi curso {course.name}</h2>

                <div className={styles.img}>
                <img src={course.image} alt={course.name}/>
                </div>
               
            </div>
            <div className={styles.down}>
            <h2>Descripcion</h2>
           
                <h3>{course.description}</h3>
           
            </div>
            {user.roles[0].tipo === "instructor" ? <button  onClick={handleSubmitCourse} className={styles.buttonEditar}> Editar Curso </button >:null}
        </div>
        )
    }  
    
    return (
        <div className={styles.container}>
            <div className={styles.up}>
                
                <h2>{name}</h2>
                {/* <video src={video} controls="true" /> */}
                <ReactPlayer className={styles.video}
                    url={url}
                    controls='true'  
                />
            </div>
            <div className={styles.down} >
                <h2>Descripcion</h2>
              
                <h3>{description}</h3>
            
               
                
                
            </div>
         <div>
           
           
 { user.roles[0].tipo === "instructor" ? (<button onClick={handleSubmitClass} className= {styles.buttonEditar}> Editar Clase </button>) : null} 
            
 </div>    

        </div>
  
     
   
    )
    
}