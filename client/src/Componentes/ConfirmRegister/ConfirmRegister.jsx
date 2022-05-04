import React from "react";
import styles from "./confirmRegister.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ConfirmRegister() {
  const navigate = useNavigate();
  useEffect(() => {
    redirect();
  });

  function redirect() {
    setTimeout(() => {
      navigate("/user");
    }, 5000);
  }
  return (
    <div className={styles.container}>
      <h2>Fuiste registrado correctamente!</h2>
      <h3>Se le ha enviado un mail para verificar su Usuario.</h3>
      <h3>En unos segundos serás redirigido para iniciar sesión...</h3>
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
