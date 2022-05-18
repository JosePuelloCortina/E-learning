import React, { useEffect, useState } from "react";
import styles from "./revisionCourse.module.css";
import video from "../../Images/videoClase.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  allCourses,
  editClassById,
  editCoursesById,
  getClassById,
  removeCourse,
  removeCourseDetail,
} from "../../redux/actions";

export default function RevisionCourse({ currentCourse }) {
  // console.log(course, 'esto es course')
  const dispatch = useDispatch();

  const {
    name,
    description,
    progress,
    review,
    image,
    price,
    category,
    deshabilitar,
    url,
    id,
  } = currentCourse;

  const navigate = useNavigate();
  const courseState = useSelector((state) => state.courseDetail);
  const classState = useSelector((state) => state.classDetail);

  const categoriesName =
    courseState.category && courseState.category.map((e) => e.name);

  const [currentClass, setCurrentclass] = useState({});

  const form = {
    name: courseState.name,
    description: courseState.description,
    url: courseState.url,
    progress: courseState.progress,
    review: courseState.review,
    Image: courseState.image,
    price: courseState.price,
    category: categoriesName,
    deshabilitar: courseState.deshabilitar,
    state: "reject",
    commentary: courseState.commentary,
  };


const formClass = {

  name: currentClass.name,
  duration:currentClass.duration,
  description: currentClass.description,
  url: currentClass.url,
  id: currentClass.id,
  deshabilitar: currentClass.deshabilitar,
  state:"",

}



  const handleInputChange = function (e) {
    console.log(e);
    form.commentary = e.target.value;
  };

  function handleDeshabilitarCourse(e) {
    form.state = e;
    dispatch(editCoursesById(id, form));

    setTimeout(() => {
      // dispatch(getCoursesById(id));
      dispatch(allCourses());
      dispatch(removeCourseDetail());
      setCurrentclass({});
    }, 1500);
  }

  const handleRemoveCourse = (e) => {
    e.preventDefault(e);
    if (window.confirm("¿Desea eliminar este comentario?") === true) {
      dispatch(removeCourse(id));
      setTimeout(() => {
        dispatch(allCourses());
        dispatch(removeCourseDetail());
      }, 1500);
    } else {
      alert("Cancelado.");
    }
  };

  function handleLesson(e) {
    dispatch(getClassById(e.id));
    setCurrentclass(e);
  }

  function handleAproClass(e) {

    formClass.state = e.target.name

    e.preventDefault(e);
    dispatch(editClassById(formClass.id,formClass));
    if (e.target.name==="passed") 
    {alert("clase Aprobada")}
    else {alert("clase Rechazada")}
    
    
  }

  

  if (courseState.name) {
    return (
      <div className={styles.containerTotal}>
        <div className={styles.container}>
          <div className={styles.up}>
            <h1>CURSO A REVISAR:</h1>
            <h1> {courseState.name}</h1>
            <div className={styles.img}>
              <img src={courseState.image} alt={courseState.name} />
            </div>
          </div>
          <div className={styles.down}>
            <h2>DESCRIPCION:</h2>
            <h2>{courseState.description}</h2>
          </div>

          <div class={styles.SubcontainerInput2}>
            <h2 style={{ color: "red" }}>Comentarios de la revision:</h2>

            <textarea
              placeholder={courseState.commentary}
              id={styles.description}
              autoComplete="off"
              onChange={handleInputChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className={styles.buttonEdicion}>
            <button
              onClick={() => handleDeshabilitarCourse("passed")}
              disabled={courseState.state == "passed" ? true : false}
              style={courseState.state == "passed" ? { opacity: "20%" } : null}
              className={styles.buttonEditarClass}
            >
              {" "}
              Aprobado{" "}
            </button>
            <button onClick={handleRemoveCourse}>Eliminar </button>
            <button
              onClick={() => handleDeshabilitarCourse("reject")}
              disabled={courseState.state == "reject" ? true : false}
              style={courseState.state == "reject" ? { opacity: "20%" } : null}
              className={styles.buttonEditarClass}
            >
              {" "}
              Rechazado{" "}
            </button>
          </div>
        </div>

        <div className={styles.containerClases}>
          <div className={styles.mapeo}>
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
                          e.state === "passed"
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
            <ReactPlayer
              className={styles.video}
              url={currentClass.url}
              controls="true"
            />
          </div>
          <div className={styles.containerVideo}></div>
          <h2>Descripcion:</h2>
          {currentClass.description}
          <h2>Duracion:</h2>
          Min: {currentClass.duration}'<h2>Instructor:</h2>
          {courseState.users[0].name}
          { currentClass.state === "inprocess" || currentClass.state === "reject" ?
          <div className={styles.buttonEdicion}>
<button className={styles.buttonAprobClass} name="passed" onClick={handleAproClass}>Aprobar clase</button>
<button className={styles.buttonAprobClass} name="reject" onClick={handleAproClass}>Rechazar clase</button>
</div>:null
        }
        

          
          
          
        </div>
      </div>
    );
  }

  return (
    <div className={styles.containerTotal}>
      <div className={styles.container}>
        <h2>Revision del curso </h2>
      </div>

      <div className={styles.container}>
        <h2>Revision de Clases</h2>
      </div>
    </div>
  );
}
