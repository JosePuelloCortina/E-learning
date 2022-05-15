import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUser } from "../../redux/actions";
import styles from "../ChangePassword/ChangePassword.module.css";
import bcrypt from "bcryptjs";

function ChangePassword() {
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
    if (!input.newPassword) {
      errors.newPassword = "Escriba su nueva contraseña.";
    }
    if (!input.confirmPassword) {
      errors.confirmPassword = "Confirme su nueva contraseña.";
    }

    if (input.confirmPassword && input.confirmPassword !== input.newPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if ((input.password && input.confirmPassword) !== userInit.password) {
      errors.password = "Su contraseña actual no es correcta";
    }

    if (input.newPassword && !passExp.test(input.newPassword)) {
      errors.newPassword =
        "La contraseña debe contener entre 5 y 15 caracteres, al menos una mayúscula, una minúscula un número, y un caracter especial.";
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
      if (!input.password || !input.newPassword || !input.confirmPassword) {
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

          {/* {errors.password && <p className="error">{errors.password}</p>} */}
        </div>
        <div>
          <label>Nueva Contraseña</label>
          <input
            type="password"
            value={input.newPassword}
            onChange={handleInputChange}
            name="newPassword"
          />

          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
        </div>
        <div>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={input.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button className={styles.save}>Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ChangePassword;
