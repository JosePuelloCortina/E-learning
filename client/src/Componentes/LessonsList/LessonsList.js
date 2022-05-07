import React from "react";
import styles from "./lessonsList.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function LessonsList({
  lessons,
  form,
  setForm,
  setCurrentLesson,
  user,
}) {
  console.log(lessons, "esto es lessons");
  const navigate = useNavigate();
  function handleReview(e) {
    e.preventDefault(e);
    setForm(true);
  }

  function handleSubmitClass(e) {
    e.preventDefault(e);
    navigate(`/formClass`);
  }

  if (user.roles[0].tipo === "instructor") {
    return (
      <div className={styles.container}>
        <h3>Clases</h3>
        <button>editar clase</button>
        <br></br>
        <button onClick={handleSubmitClass}> Crear Clase</button>
        {lessons
          ? lessons.map((e) => {
              return (
                <div className={styles.classes}>
                  <p value={e} onClick={() => setCurrentLesson(e)}>
                    {e.name}
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
              return (
                <div className={styles.classes}>
                  <p value={e} onClick={() => setCurrentLesson(e)}>
                    {e.name}
                  </p>

                  <input type="checkbox" />
                </div>
              );
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
