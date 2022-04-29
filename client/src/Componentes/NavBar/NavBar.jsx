import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchCourse from "../Search/SearchCourse";
import { useSelector } from "react-redux";

export default function Home() {
  const logedUser = useSelector(state =>state.loged )

        return (
    <div className={styles.navBar}>
      <Link className={styles.linkHome} to="/home">
        <h1>AkademIT</h1>
      </Link>
      <SearchCourse />
      
      <Link to="/user">
        <button>Mi perfil</button>
      </Link>
      { !logedUser?
      <Link to="/user">
        <button>Ingresar</button>
      </Link>
    :<Link to=" ">
        <button>Salir</button>
      </Link>}
    </div>
  
  );
}
