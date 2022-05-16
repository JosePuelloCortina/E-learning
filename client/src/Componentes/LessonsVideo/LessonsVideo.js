import React, { useEffect } from "react";
import styles from "./lessonsVideo.module.css";
import video from "../../Images/videoClase.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  allUser,
  editClassById,
  editCoursesById,
  getAllClasses,
  getClassById,
  getCoursesById,
  removeClass,
} from "../../redux/actions";

export default function LessonsVideo({
  currentLesson,
  setCurrentLesson,
  course,
  user,
  id,
  idCourse,
}) {
  console.log(course, "esto es course");
  const dispatch = useDispatch();
  const { name, description, duration, url, deshabilitar } = currentLesson;
  const classState = useSelector((state) => state.classDetail);
  const navigate = useNavigate();

  const form = {
    name: name,
    description: description,
    url: url,
    deshabilitar: deshabilitar === "false" ? "true" : "false",
  };

  function handleSubmitCourse(e) {
    e.preventDefault(e);
    navigate(`/editCourse/${idCourse}`);
  }

  function handleSubmitClass(e) {
    e.preventDefault(e);
    navigate(`/editClass/${classState.id}`);
  }

  const handleRemoveClass = (e) => {
    e.preventDefault(e);
    if (window.confirm("¿Desea eliminar este comentario?") === true) {
      dispatch(getAllClasses());
      dispatch(getCoursesById(idCourse));
      dispatch(removeClass(classState.id));
      setCurrentLesson({});
      window.location.reload(false);
    } else {
      alert("Cancelado.");
    }
  };

  const handleDeshabilitarClass = (e) => {
    console.log(form, "PROBANDO-DESHABILITAR");
    dispatch(editClassById(classState.id, form));
    setTimeout(() => {
      dispatch(getAllClasses());
      dispatch(getClassById(classState.id));
      setCurrentLesson({});
      console.log(form, "PROBANDO-DESHABILITAR2");
    }, 1000);
  };

  if (!currentLesson.name) {

    return (
       
      <div className={styles.container}>
        <div className={styles.up}>
          <h2>Bienvenido a mi curso {course.name}</h2>

          <div className={styles.img}>
            <img src={course.image} alt={course.name} />
          </div>
        </div>

        <div className={styles.down}>
          <h2>Descripcion</h2>
          <br></br>
          <h2>{course.description}</h2>

          {course.state === "reject" && user.roles[0].tipo === "instructor" ? (
            <div className={styles.Commentary}>
              <h2 style={{ color: "red" }}>
                Modifique el curso y/o clases segun sugerencias:
              </h2>
              <h4>{course.commentary}</h4>
            </div>
          ) : null}
        </div>


{user.roles[0].tipo === "instructor"?

<div className={styles.buttonEdicion}>
{user.roles[0].tipo === "instructor" && course.state === "reject" ? (
<button
onClick={handleSubmitCourse}
className={styles.buttonEditarCourse}
>
{" "}
Correccion Curso{" "}
</button>
) : (
<button
onClick={handleSubmitCourse}
className={styles.buttonEditarCourse}
>
{" "}
Editar Curso{" "}
</button>
)}
</div>:null

}

      </div>
            );  

   
  }

  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <h2>{name}</h2>

        {/* <video src={video} controls="true" /> */}
        <ReactPlayer className={styles.video} url={url} controls="true" />
      </div>
      <div className={styles.down}>
        <h2>Descripcion</h2>
        <h2>{description}</h2>
        </div>

 { user.roles[0].tipo === "instructor"? 


<div> 

 {course.state !== "reject" ? (
  <div className={styles.buttonEdicion}>
    {user.roles[0].tipo === "instructor" ? (
      <button
        onClick={handleSubmitClass}
        className={styles.buttonEditarClass}
      >
        {" "}
        Editar Clase{" "}
      </button>
    ) : null}
    <button onClick={handleRemoveClass}>Eliminar Clase</button>
    <button onClick={handleDeshabilitarClass}>
      Hablitar/Deshabilitar
    </button>
  </div>
 ) : (
  <div className={styles.buttonEdicion}>
    <button
      onClick={handleSubmitClass}
      className={styles.buttonEditarClass}
    >
      {" "}
      Correccion de clase{" "}
    </button>
  </div>
 )}


</div>
:null
 }


      
    </div>
  );
}
