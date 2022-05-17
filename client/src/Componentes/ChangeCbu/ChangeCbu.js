import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUser } from "../../redux/actions";
import styles from "./changeCbu.module.css";
import bcrypt from "bcryptjs";

function ChangeCbu() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userInit = useSelector((state) => state.userDetail);

  const userCategory =
    userInit.categories && userInit.categories.map((category) => category.name);

  const [input, setInput] = useState({
    name: userInit.name,
    newPassword: "",
    email: userInit.email,
    categories: userCategory,
    image: userInit.image,
   
  });

  const [errors, setErrors] = useState({});

  let salt = bcrypt.genSaltSync(10);

  function validate(input) {
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])\S{5,15}/;
    let errors = {};

    if (!input.password) {
      errors.password = "Escriba su contraseña.";
    }

    if ((input.password && input.confirmPassword) !== userInit.password) {
      errors.password = "Su contraseña actual no es correcta";
    }

    return errors;
  }

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = await bcrypt.compare(input.password, userInit.password);
    if (!isValid && input.password !== userInit.password) {
      alert("Su contraseña actual no es correcta");
    } else {
      if (!input.password || !input.cbu ) {
        alert("Por favor complete todos los campos.");
      } else {
        if (window.confirm("¿Desea modificar sus datos?") === true) {
          dispatch(updateUser(userInit.id, input));
          alert("Cambios guardados.");
          navigate(`/profile/${userInit.id}`);
        } else {
          navigate(`/profile/${userInit.id}`);
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.editPanel}>
        <div>
          <label>Contraseña Actual</label>
          <input
            type="password"
            value={input.password}
            onChange={handleInputChange}
            name="password"
          />

        
        </div>
        <div>
          <label>Nuevo CBU </label>
          <input
            type="text"
            value={input.cbu}
            onChange={handleInputChange}
            name="cbu"
          />

        </div>
       
        <button className={styles.save}>Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ChangeCbu;
