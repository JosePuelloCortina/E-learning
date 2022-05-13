import React, { useEffect, useState } from 'react'
import styles from './revisionCourse.module.css'
import video from '../../Images/videoClase.mp4'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { allCourses, allUser, editClassById, editCoursesById, getAllClasses, getClassById, getCoursesById, removeClass, removeCourse, removeCourseDetail } from '../../redux/actions'

export default function RevisionCourse({currentCourse}){
    // console.log(course, 'esto es course')
    const dispatch = useDispatch();
     
        const {name, description, progress,review,image,price,category,deshabilitar,url,id} = currentCourse
   
    const navigate = useNavigate();
    const courseState = useSelector((state) => state.courseDetail);
    const classState = useSelector((state) => state.classDetail);

  const categoriesName = courseState.category&&courseState.category.map((e)=>e.name)


  const [currentClass, setCurrentclass] = useState({});



  

        const form = {
   
          name: courseState.name,
          description: courseState.description,
          url: courseState.url,
          progress:courseState.progress,
          review: courseState.review,
          Image:courseState.image,
          price:courseState.price,
          category:categoriesName,
          deshabilitar:"deshabilitado",
          
          
          }

          const formClass = {
   
            name: currentClass.name,
            description: currentClass.description,
            url: currentClass.url,
            deshabilitar:currentClass.deshabilitar === "false"?"true":"false"
         
            }

  

  function handleDeshabilitarCourse(e) {
    
     form.deshabilitar=e
            dispatch(editCoursesById(id,form));

            setTimeout(() => {
                // dispatch(getCoursesById(id));
                dispatch(allCourses());
                dispatch(removeCourseDetail());
                setCurrentclass({})
            }, 1500);
  }

  
  const handleRemoveCourse = (e) => {
    e.preventDefault(e);
   
    dispatch(removeCourse(id));
    setTimeout(() => {

    dispatch(allCourses());
    dispatch(removeCourseDetail());
    
  }, 1500);
  
  }

  
  const handleDeshabilitarClass = (e) => {

    
    dispatch(editClassById(currentClass.id,formClass));
    setTimeout(() => {
        dispatch(getAllClasses());
        dispatch(getCoursesById(courseState.id));
        dispatch(getClassById(currentClass.id));
     
    }, 1000);
   
  }


  function handleLesson(e) {
    dispatch(getClassById(e.id));
    setCurrentclass(e)
  }

    
     
    if(courseState.name) {
        return (



          <div className={styles.containerTotal}>



            <div className={styles.container}>
            <div className={styles.up}>
                <h1>Curso a Revisar {courseState.name}</h1>
                <div className={styles.img}>
                <img src={courseState.image} alt={courseState.name}/>
                </div>
               
            </div>
            <div className={styles.down}>
            <h2>Descripcion</h2>
             <h2>{courseState.description}</h2>
             </div> 

             
             <div className={styles.buttonEdicion}>
             <button onClick={() => handleDeshabilitarCourse("aprobado")}    className= {styles.buttonEditarClass}> Aprobado </button>
             <button onClick={handleRemoveCourse} >Eliminar </button>
             <button onClick={() => handleDeshabilitarCourse("deshabilitado")}    className= {styles.buttonEditarClass}> Deshabilitar </button>
           </div> 

             </div>




             

<div className={styles.containerClases}>


      <div className={styles.mapeo} >

      <div className={styles.containerTitle}>
          <h1>Clases</h1>
        </div>

        {courseState.clases
          ? courseState.clases.map((e) => {
              return (
                <div className={styles.classes}>
                  <p
                    value={e}
                    className={
                      e.deshabilitar === "false"
                        ? styles.habilitado
                        : styles.deshabilitado
                    }
                    onClick={() => handleLesson(e)}
                  >
                    - {e.name}
                  </p>

                </div>
              );
            })
          : null}
      </div>


      <div className={styles.containerVideo}>
    
 <ReactPlayer className={styles.video}
 url={currentClass.url}
 controls='true'  
/>
   
         </div>

         <div className={styles.buttonEdicion}>
         <button onClick={handleDeshabilitarClass}    className= {styles.buttonEditarClass}> Deshabilitar/Clase </button>
         </div> 
          </div>

           </div> 
        )
    }  
    
    return (
        <div className={styles.container}>
             
                <h2>Revision del curso </h2>

 </div>    

   
    )
    
}