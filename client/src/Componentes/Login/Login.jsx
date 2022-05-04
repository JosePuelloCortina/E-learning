import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import { addLoggedUser } from "../../redux/actions/index";
import { useNavigate } from "react-router";
import { allUser } from "../../redux/actions/index";
import googleIcon from "../../Images/googleIcon.png";
import axios from "axios";

export function validation(validate) {
  let errors = {};
  console.log(errors);

  // USUARIO-(EMAIL)

  if (!validate.email) {
    errors.email = "se requiere e-mail";
  } else if (
    !validate.email.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    errors.email = "Ingrese un correo válido";
  }

  // PASSWORD (CONTRASEÑA ALFANUMERICO)

  if (!validate.password) {
    errors.password = "Se requiere contraseña";
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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [errors, setErrors] = React.useState({});

  const [validate, setValidate] = React.useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(allUser());
  }, [dispatch]);

  const handleInputChange = function (e) {
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

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (validate.email !== "" && validate.password !== "") {
      const token = await axios.post(
        `http://localhost:3001/user/login`,
        validate
      );

      const usuario = users.find((user) => user.email === validate.email);
      if (token.data.user) {
        dispatch(addLoggedUser(usuario.id));
        navigate(`/profile/${usuario.id}`);
      } else {
        alert("Email/password incorrecto o cuenta no verificada");
      }
    } else {
      alert("Debes rellenar todos los campos antes de registrarte");
    }
  };

  const handleSucces = async (response) => {
    const userGoogle = users.find(
      (element) => element.email === response.profileObj.email
    );

    if (userGoogle !== undefined) {
      const token = await axios.post(`http://localhost:3001/user/login`, {
        email: userGoogle.email,
        password: userGoogle.password,
      });

      if (token.data.user) {
        dispatch(addLoggedUser(userGoogle.id));
        navigate(`/profile/${userGoogle.id}`);
      } else {
        alert("Email/password incorrecto o cuenta no verificada");
      }
    } else {
      alert("No estas registrado, ahora seras redireccionado para registrarte");
      navigate(`/form`);
    }
  };

  const handleFailure = () => {};

  return (
    <div class={style.container}>
      <div className={style.logo}>
        <Link to="/home">
          <h1>AkademIT</h1>
        </Link>
      </div>
      <div className={style.title}>
        <h2>Iniciar Sesión</h2>
        <form class={style.form} onSubmit={(e) => handleOnSubmit(e)}>
          <div class={style.containerInput}>
            <div class={style.SubcontainerInput}>
              <br></br>
              <label>Correo electrónico</label>
              <input
                placeholder="Ingresa tu e-mail..."
                type="text"
                name="email"
                autoComplete="off"
                onChange={handleInputChange}
                value={validate.email}
              />
            </div>
            {errors.email && <p>{errors.email}</p>}

            <div class={style.SubcontainerInput}>
              <br></br>
              <label>Contraseña</label>
              <input
                placeholder="Ingresa tu Contraseña..."
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
            <button className={style.ingresar} type="submit">
              Ingresar
            </button>
            <GoogleLogin
              clientId="182193606082-foogb22mq9p98ci7l3qc9he32nu60cd3.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className={style.google}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img src={googleIcon} alt="" /> Ingresar con Google
                </button>
              )}
              onSuccess={handleSucces}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <h4>¿No estas registrado?</h4>
          <div class={style.divButton1}>
            <Link to="/form">
              <button class={style.buttonRegistro} type="submit">
                Registrarme
              </button>
            </Link>
          </div>
          <Link to="/home">
            <button class={style.buttonReturnHome}>Volver</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
