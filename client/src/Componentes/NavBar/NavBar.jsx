import React from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeLoggedUser,
  removeToken,
  removeUserDetail,
} from "../../redux/actions";
import logo from "../../Images/logoAkademit.png";

export default function Home() {
  const loggedUser = useSelector((state) => state.loggedUsers);

  const user = useSelector((state) => state.userDetail);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(removeToken());
    dispatch(removeLoggedUser(loggedUser));
    dispatch(removeUserDetail());
    alert("Ha cerrado sesion exitosamente!");
    navigate("/home");
  };

  return (
    <div className={styles.navBar}>
      {loggedUser.length > 0 && (
        <Link to={`/profile/${loggedUser}`}>
          <button className={styles.buttonPerfil}>Mi perfil</button>
        </Link>
      )}

      {loggedUser.length === 0 ? (
        <Link to="/user">
          <button>Ingresar</button>
        </Link>
      ) : (
        <button onClick={(e) => handleOnClick(e)}>Salir</button>
      )}

      {user.roles.filter((r) => r.tipo === "admin").length > 0 ? (
        <Link className={styles.linkHome} to="/admin">
          {/* <img src={logo} alt='' /> */}
          <h1>AkademIT</h1>
        </Link>
      ) : (
        <Link className={styles.linkHome} to="/home">
          {/* <img src={logo} alt='' /> */}
          <h1>AkademIT</h1>
        </Link>
      )}
    </div>
  );
}
