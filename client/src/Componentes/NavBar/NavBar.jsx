import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


export default function Home() {
  const logedUser = useSelector(state =>state.loged )

        return (
    <div className={styles.navBar}>
            
      <Link to="/user">
        <button>Mi perfil</button>
      </Link>
      <Link className={styles.linkHome} to="/home">
        <h1>AkademIT</h1>
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
