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
  allUser,
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
  const userRole = userInit.roles ? userInit.roles[0].tipo : "";

  const [Rol, setRol] = useState({ rol: userRole });
  console.log(userInit);

  const navigate = useNavigate();

  const avatars = useSelector((state) => state.avatares);
  console.log(avatars, "esto es avatars");
  // console.log(avatars.data[0], "probando")

  // const salt = bcrypt.genSaltSync(10);
  // const hashPassword = bcrypt.hashSync(userInit.password, 10);

  const [input, setInput] = useState({
    name: userInit.name,
    email: userInit.email,
    categories: userCategory,
    image: userInit.image,
    cbu: userInit.cbu,
    rol: userInit.roles[0].tipo,
  });

  useEffect(() => {
    dispatch(getUserById(userInit.id));
    // dispatch(getAvatares());
  }, [Rol, dispatch]);

  console.log(input, "input");
  const [errors, setErrors] = useState({});

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
  console.log(id, "id");

  function handleRemoveCategory(e) {
    e.preventDefault();
    setInput({
      ...input,
      categories: input.categories.filter(
        (category) => category !== e.target.value
      ),
    });
  }

  // function handleSelect(e) {
  //   setAvatares({
  //     ...avatares,
  //     avatares: [e.target.value],
  //   });
  // }

  function handleSubmit(e) {
    if (!input.name || !input.email) {
      alert("Por favor complete todos los campos.");
    } else {
      if (window.confirm("¿Desea modificar sus datos?") === true) {
        dispatch(updateUser(id, input));
        console.log(input, "input FINAL ");
        alert("Cambios guardados.");
        navigate(`/profile/${id}`);
      } else {
        navigate(`/profile/${id}`);
      }
    }
  }

  function validate(input) {
    // let emailExp =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])\S{5,15}/;
    let errors = {};
    if (!input.name) {
      errors.name = "Por favor complete su nombre.";
    }
    if (!input.email) {
      errors.email = "Por favor agregue un electrónico.";
    }
    return errors;
  }

  // useEffect(() => {
  //   dispatch(updateUser(userInit.id,Rol));
  //   dispatch(getUserById(userInit.id));
  //   dispatch(allUser())
  // }, [Rol]);

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
                    readOnly
                  />

                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                {userRole === "instructor" ? (
                  <div className={styles.cbu}>
                    <label>CBU:</label>
                    <label>{input.cbu}</label>
                  </div>
                ) : null}
                <span className={styles.rolSpan}>Elegir Rol:</span>
                <div className={styles.containerInput}>
                  <div className={styles.inputRoles}>
                    <p>Alumno</p>
                    <input
                      type="radio"
                      name="rol"
                      value="alumno"
                      checked={input.rol === "alumno"}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className={styles.inputRoles}>
                    <p>Instructor</p>
                    <input
                      type="radio"
                      name="rol"
                      value="instructor"
                      checked={input.rol === "instructor"}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.right}>
                <Link
                  to={`/profile/edit/password/${id}`}
                  className={styles.linkContraseña}
                >
                  Cambiar contraseña
                </Link>

                {userRole === "instructor" ? (
                  <Link
                    to={`/profile/edit/cbu/${id}`}
                    className={styles.linkContraseña}
                  >
                    Cambiar CBU
                  </Link>
                ) : null}
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
                          checked={a.image === input.image ? "checked" : ""}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            {userRole === "alumno" && (
              <div className={styles.containerSelect}>
                <div>
                  <div className={styles.tituloseleccionar}>
                    <label>Selecciona tus temas favoritos: </label>
                  </div>
                  <select
                    className={styles.decorando}
                    onChange={(e) => handleAddCategory(e)}
                  >
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
            )}
            {userRole === "alumno" && (
              <div className={styles.decorando}>
                {input.categories &&
                  input.categories.map((category) => (
                    <div className={styles.decorando} key={category}>
                      <p className={styles.p}>
                        {category}
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
            )}

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
