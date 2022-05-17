import React, {useState } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate} from "react-router-dom";
import Contenido from "../Chatbot/Chatbot";
import { useDispatch, useSelector } from "react-redux";
import {
  removeLoggedUser,
  removeToken,
  removeUserDetail,
} from "../../redux/actions";
import logo from "../../Images/logoAkademit.png";

export default function Home() {
  // function handleChatbot(e){
  //   e.preventDefault(e);
  //   setChatbot(!chatbot)
    
  //    }
  const[chatbot, setChatbot]= useState(false)
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
    <Link to="/nosotros" className={styles.us}> ¿Quiénes somos?</Link>
      {loggedUser.length > 0 && Object.keys(user).length > 0 ? (
        <div className={styles.myPerfil}>
          <p className={styles.userName}>
            {user.roles[0] && user.roles[0].tipo.charAt(0).toUpperCase() +
              user.roles[0].tipo.slice(1)}{" "}
            {user.name}
          </p>
          <Link to={`/profile/${loggedUser}`}>
            <button className={styles.buttonPerfil}>Mi perfil</button>
          </Link>
        </div>
      ) : null}

      {loggedUser.length === 0 ? (
        <Link to="/user">
          <button>Ingresar</button>
        </Link>
      ) : (
        <button onClick={(e) => handleOnClick(e)}>Salir</button>
      )}
      {
        chatbot?
        <div className={styles.visible}><Contenido setChatbot={setChatbot} chatbot ={chatbot} /></div>:null
      }
      <button onClick={() =>setChatbot(!chatbot)} className={styles.buttonPerfil}>Ayuda</button>
   
      {user.roles && user.roles.filter((r) => r.tipo === "admin").length > 0 ? (
        <Link className={styles.linkHome} to="/home">
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
