import React from "react";
import styles from "./confirmCourse.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesById } from "../../redux/actions";
import { useParams } from "react-router";



export default function ConfirmCourse() {

  const {id} = useParams()

 

  const navigate = useNavigate();
  useEffect(() => {
    redirect();
  });

 
  function redirect() {
    setTimeout(() => {
      navigate(`/courselessons/${id}`);

    }, 4000);

  }

  
  return (
    <div className={styles.container}>
      <h2>Curso editado correctamente!</h2>
      <h3>En unos segundos serás redirigido a su perfil...</h3>
      <br />
      <br />
      <h1>AkademIT</h1>
      <br />
      <br />
      <Link to={`/courselessons/${id}`} >
        <p>Si no fuiste redirigido clickea aqui.</p>
      </Link>
    </div>
  );
}
