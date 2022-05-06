import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./editProfile.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {
  getUserById,
  updateUser,
  getAvatares,
} from "../../redux/actions/index";
import { useParams } from "react-router-dom";

export default function EditProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // useEffect(() => {}, [dispatch, id]);

  useEffect(() => {
    dispatch(getUserById(id));
    // dispatch(getAvatares());
  }, [dispatch]);

  const userInit = useSelector((state) => state.userDetail);
  const stateCategories = useSelector((state) => state.categories);
  console.log(userInit, "userInit");
  const userCategory =
    userInit.categories && userInit.categories.map((category) => category.name);

  const navigate = useNavigate();

  const avatars = useSelector((state) => state.avatares);
  console.log(avatars, "esto es avatars");
  // console.log(avatars.data[0], "probando")

  const [input, setInput] = useState({
    id: id,
    name: userInit.name,
    password: "",
    confirmPassword: "",
    email: userInit.email,
    categories: userCategory,
    image: "",
  });
  console.log(input, "input");
  const [errors, setErrors] = useState({});

  // console.log(input)

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

  function handleAddCategory(e) {
    if (
      e.target.value !== "Categoria" &&
      !input.categories.includes(e.target.value) &&
      input.categories.length < 5
    ) {
      setInput({
        ...input,
        categories: [...input.categories, e.target.value],
      });
    }
  }

  function handleRemoveCategory(e) {
    e.preventDefault();
    setInput({
      ...input,
      categories: input.categories.filter(
        (category) => category !== e.target.value
      ),
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      avatars: [input.avatars, e.target.value],
    });
  }

  function handleSubmit(e) {
    if (
      !input.name ||
      !input.email ||
      !input.password ||
      !input.confirmPassword
    ) {
      alert("Por favor complete todos los campos.");
    } else {
      if (window.confirm("¿Desea modificar sus datos?") === true) {
        dispatch(updateUser(id, input));
        alert("Cambios guardados.");
        navigate(`/profile/${id}`);
      } else {
        navigate(`/profile/${id}`);
      }
    }
  }

  function validate(input) {
    let emailExp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])\S{5,15}/;
    let errors = {};
    if (!input.name) {
      errors.name = "Por favor complete su nombre.";
    }
    if (!input.email) {
      errors.email = "Por favor agregue un electrónico.";
    }
    if (!input.password) {
      errors.password = "Agregue una nueva contraseña.";
    }
    if (!input.confirmPassword) {
      errors.confirmPassword = "Confirme su nueva contraseña.";
    }

    if (input.confirmPassword && input.confirmPassword !== input.password) {
      errors.confirmPassword = "Las contraseñas no coinciden.";
    }
    if (input.email && !emailExp.test(input.email)) {
      errors.email = "Ingrese una dirección de correo válida.";
    }
    if (input.password && !passExp.test(input.password)) {
      errors.password =
        "La contraseña debe contener entre 5 y 15 caracteres, al menos una mayúscula, una minúscula un número, y un caracter especial.";
    }
    return errors;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Mis Datos</h2>
        </div>
        <div className={styles.editPanel}>
          <form onSubmit={handleSubmit}>
            <div className={styles.cont2}>
              <div className={styles.left}>
                <div>
                  <label>Nombre y Apellido</label>
                  <input
                    type="text"
                    value={input.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    value={input.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              <div className={styles.right}>
                <div>
                  <label>Nueva Contraseña</label>
                  <input
                    type="password"
                    value={input.password}
                    onChange={handleInputChange}
                    name="password"
                  />

                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
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
              </div>
              <div>
                
              </div>
            </div>
            <div className={styles.avatares}>
              <label>Elije tu Avatar: </label>
              {/* <img src={avatars.data[0].image} alt="" />   */}
              <div className={styles.conteineravatar}>
              {avatars &&
                avatars.data.map((a) => {
                  return (
                    <div className={styles.avatar}>
                      <img src={a.image} alt="" key={a.image} />
                      <input
                        type="radio"
                        name="image"
                        value={a.image}
                        onChange={handleInputChange}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.containerSelect}>
                  {/* <label>Categoria</label> */}
                  <div >
                  <label>Selecciona tus temas favoritos:  </label>
                    <select className={styles.decorando} onChange={(e) => handleAddCategory(e)}>
                      <option>Seleccionar</option>
                     
                      {stateCategories &&
                        stateCategories.map((category) => {
                          return (
                            <option key={category.name} value={category.name}>
                              {category.name}
                            </option>
                          );
                        })}
                    
                    </select>
                    
                  </div>
                </div>
                <div className={styles.decorando}>
                  {input.categories &&
                    input.categories.map((category) => (
                      <div className={styles.decorando} key={category}>
                        <p className={styles.p}>{category}
                        <button
                          onClick={(e) => handleRemoveCategory(e)}
                          value={category}
                          className={styles.botonx}
                        >
                          X
                        </button>
                        </p>

                      </div>
                    ))}
                </div>
            <div className={styles.buttons}>
              <Link to={`/profile/${id}`}>
                <button className={styles.save}>Volver atrás</button>
              </Link>
              <button type="submit" className={styles.save}>
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
