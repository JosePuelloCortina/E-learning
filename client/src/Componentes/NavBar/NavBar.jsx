import React from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../redux/actions";

export default function Home() {
  const loggedUser = useSelector((state) => state.loggedUsers);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(removeLoggedUser(loggedUser));
    alert("Ha cerrado sesion exitosamente!");
    navigate("/home");
  };

  return (
    <div className={styles.navBar}>
      {loggedUser.length > 0 && (
        <Link to={`/profile/${loggedUser}`}>
          <button>Mi perfil</button>
        </Link>
      )}
      <Link className={styles.linkHome} to="/home">
        <h1>AkademIT</h1>
      </Link>

      {loggedUser.length === 0 ? (
        <Link to="/user">
          <button>Ingresar</button>
        </Link>
      ) : (
        <button onClick={(e) => handleOnClick(e)}>Salir</button>
      )}
    </div>
  );
}
