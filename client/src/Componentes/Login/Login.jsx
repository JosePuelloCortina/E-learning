import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import { validateUser } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import { addLoggedUser } from "../../redux/actions/index";
import { useNavigate } from "react-router";
import { allUser } from "../../redux/actions/index";

export function validation(validate) {
  let errors = {};
  console.log(errors);

  // USUARIO-(EMAIL)

  if (!validate.user) {
    errors.user = "se requiere e-mail";
  } else if (
    !validate.user.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    errors.user = "solo se admiten e-mail";
  }

  // PASSWORD (CONTRASEÑA ALFANUMERICO)

  if (!validate.password) {
    errors.password = "se requiere password";
  } else if (
    !validate.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])\S{5,15}/
    )
  ) {
    // errors.password = "se requiere clave alfanumerica";
  }

  return errors;
}

export default function Login() {
  const users = useSelector((state) => state.user);

  // const loggedUsers = useSelector((state) => state.loggedUsers);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [errors, setErrors] = React.useState({});

  const [validate, setValidate] = React.useState({
    user: "",
    password: "",
  });

  useEffect(() => {
    dispatch(allUser());
  }, [dispatch]);

  const handleInputChange = function (e) {
    console.log(e);

    setValidate({
      ...validate,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...validate,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validate.user !== "" && validate.password !== "") {
      const usuario = users.find((user) => user.email === validate.user);
      if (validate.password === usuario.password) {
        dispatch(addLoggedUser(usuario.id));
        navigate(`/profile/${usuario.id}`);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Debes rellenar todos los campos antes de registrarte");
    }
  };

  const handleSucces = (response) => {
    const userGoogle = users.find(
      (element) => element.name === response.profileObj.name
    );
    console.log("userGoogle es: ", userGoogle);
    if (userGoogle !== undefined) {
      dispatch(addLoggedUser(userGoogle.id));
      navigate(`/profile/${userGoogle.id}`);
    } else {
      alert("No estas registrado, ahora seras redireccionado para registrarte");
      navigate(`/form`);
    }
  };

  const handleFailure = () => {};

  return (
    <div class={style.container}>
      <form class={style.form} onSubmit={(e) => handleOnSubmit(e)}>
        <div class={style.containerInput}>
          <div class={style.SubcontainerInput}>
            <br></br>
            <label>Usuario</label>
            <input
              placeholder="Ingresa tu e-mail..."
              type="text"
              name="user"
              autoComplete="off"
              onChange={handleInputChange}
              value={validate.user}
            />
          </div>
          {errors.user && <p>{errors.user}</p>}

          <div class={style.SubcontainerInput}>
            <br></br>
            <label>Password</label>
            <input
              placeholder="Ingresa tu Password..."
              type="password"
              name="password"
              autoComplete="off"
              onChange={handleInputChange}
              value={validate.password}
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div class={style.divButton2}>
          <button type="submit">INGRESAR</button>
          <GoogleLogin
            clientId="182193606082-foogb22mq9p98ci7l3qc9he32nu60cd3.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                INGRESAR CON GOOGLE
              </button>
            )}
            onSuccess={handleSucces}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <p>¿No estas registrado?</p>
        <div class={style.divButton1}>
          <Link className={style.linkButtonRegistro} to="/form">
            <button class={style.buttonRegistro} type="submit">
              REGISTRARME
            </button>
          </Link>
        </div>
      </form>
      <Link to="/home">
        <button class={style.buttonReturnHome}>VOLVER A HOME</button>
      </Link>
    </div>
  );
}
