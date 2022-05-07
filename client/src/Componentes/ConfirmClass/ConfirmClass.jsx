import React from "react";
import styles from "./confirmClass.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ConfirmCourse() {
  const course = useSelector((state) => state.courseDetail);

  const navigate = useNavigate();
  useEffect(() => {
    redirect();
  });

  function redirect() {
    setTimeout(() => {
      navigate(`/courselessons/${course.id}`);
    }, 5000);
  }
  return (
    <div className={styles.container}>
      <h2>Clase creada correctamente!</h2>
      <h3>En unos segundos serás redirigido a su curso...</h3>
      <br />
      <br />
      <h1>AkademIT</h1>
      <br />
      <br />
      <Link to="/user">
        <p>Si no fuiste redirigido clickea aqui.</p>
      </Link>
    </div>
  );
}
