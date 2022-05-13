import React, { useEffect, useLayoutEffect, useState } from "react";
import { allCourses, editCoursesById, filterCategory, getAllClasses, getCoursesById, removeClassDetail } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from './adminPageCourses.module.css'
import RevisionCourse from "./RevisionCourse";
import NavBar from "../NavBar/NavBar";

function AdminPageCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.coursesBackUp);
  
  const [currentCourse, setcurrentCourse] = useState([]);

  const handleCargaCourse = (e) => {
   
    setcurrentCourse(courses.find(curs => curs.id === e.target.value));
    dispatch(getCoursesById(e.target.value));
    dispatch(removeClassDetail());

  
  }
  
  

  return (
   
     <div className={styles.containertotal}>
        
       <div className={styles.containerSelect}>
       
<div className={styles.containerCourse}>
<h1 className={styles.h2}>Cursos a Revisar</h1>
{courses.map((curs) => { 

         if (curs.deshabilitar==="revisar") {

            return (
              <div className={styles.map}>
              <p   key={curs.name} value={curs.name}>
                {curs.name}
              </p>
              <div>
              <button onClick={(e)=> handleCargaCourse(e)} value={curs.id}>Carga</button>
              </div>
              </div>

            )}
          })}


</div>

       
<div className={styles.containerCourse}>
<h1 className={styles.h2}>Cursos Deshabilitado</h1>
{courses.map((curs) => { 
   if (curs.deshabilitar==="deshabilitado") {
            return (
              <div className={styles.map}>
              <p   key={curs.name} value={curs.name}>
                {curs.name}
              </p>
              <div>
             
              <button onClick={(e)=> handleCargaCourse(e)} value={curs.id} >Carga</button>
              </div>
              </div>
            )}
          })}
</div>

<div className={styles.containerCourse}>
<h1 className={styles.h2}>Cursos Aprobados</h1>
{courses.map((curs) => { 
  if (curs.deshabilitar==="aprobado") {
            return (
              <div className={styles.map}>
              <p  key={curs.name} value={curs.name}>
                {curs.name}
              </p>
              <div>
             
              <button onClick={(e)=> handleCargaCourse(e)} value={curs.id} >Carga</button>
              </div>
              </div>
            )}
          })}
</div>
       </div>


       <RevisionCourse 
        currentCourse={currentCourse}
        setCurrentCourse={setcurrentCourse}/>
     </div>
     

  

   
  )
}


export default AdminPageCourses;
