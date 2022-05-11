import React, { useEffect, useState } from "react";
import styles from "./lessonsList.module.css";
import { Link, useNavigate } from "react-router-dom";
import { allCourses, getAllClasses, getClassById, getCoursesById, removeClass } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function LessonsList({
  lessons,
  form,
  setForm,
  setCurrentLesson,
  user,
}) {



  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleReview(e) {
    e.preventDefault(e);
    setForm(true);
  }

  function handleLesson(e) {
    setCurrentLesson(e)
    dispatch(getClassById(e.id));
  }

  sortAsc(lessons)

  function handleSubmitClass(e) {
    e.preventDefault(e);
    navigate(`/formClass`);
  }



  function sortAsc(lessons, name) {
    return lessons.sort(function (a, b) {
      if (a.name > b.name) return 1;
  
      if (b.name > a.name) return -1;
  
      return 0;
    });
  }




  if (user.roles[0].tipo === "instructor") {
    return (
      <div className={styles.container}>

        <div className={styles.containerTitle}>
        <h3>Clases</h3>  
        </div>
       
  

        <br></br>
        <button onClick={handleSubmitClass} className={styles.buttonEditar}> Crear Clase</button>
        {lessons 
          ? [...lessons].map((e) => {
              return (
                <div className={styles.classes}>
                  <p value={e} className ={ e.deshabilitar === "false"  ? styles.habilitado : styles.deshabilitado}
                  onClick={() => handleLesson(e)}>
                   - {e.name}
                  </p>

                  {user.roles[0].tipo === "alumn" ? (
                    <input type="checkbox" />
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h3>Clases || Mi progreso</h3>
        {lessons
          ? lessons.map((e) => {

             if (e.deshabilitar==="true") {
              return (
                <div className={styles.classes}>
                   <input type="checkbox" />
                  <p value={e} onClick={() => setCurrentLesson(e)}>
                   - {e.name}
                  </p>
                </div>
              )
             };
            })
          : null}
        <br />
        <h5>
          Tus comentarios nos ayudan a mejorar y ayudan a otros usuarios a
          elegir mejor.
        </h5>
        <h5>Deja tu reseña sobre este curso.</h5>
        <h4 onClick={handleReview}>⭐Click aquí para calificar⭐</h4>
      </div>
    );
  }
}
