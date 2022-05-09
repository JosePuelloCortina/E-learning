import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { allUser } from "../../redux/actions";
import styles from "../UserVerification/UserVerification.module.css";

function UserVerification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allUser());
  }, [dispatch]);

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <div className={styles.container}>
      <h2>Se ha registrado exitosamente!</h2>
      <p>Haga click aqui para continuar</p>
      <button onClick={(e) => handleOnClick(e)}>Click Aqui</button>
    </div>
  );
}

export default UserVerification;
