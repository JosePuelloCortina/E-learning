import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./FormCourses.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourse,
  allUser,
  allCourses,
  updateUser,
} from "../../redux/actions/index";

export function validation(form) {
  let errors = {};
  console.log(errors);

  // USUARIO-(NAME)

  if (!form.name) {
    errors.name = "Ingrese nombre del curso";
  }

  // PRECIO

  if (!form.price) {
    errors.price = "Ingrese un valor";
  } else if (!Number(form.price)) {
    errors.price = "El valor debe ser un entero";
  }

  return errors;
}

export function validation2(formUser) {
  let errors2 = {};

  //CBU

  if (!formUser.cbu) {
    errors2.cbu = "Ingrese un valor";
  } else if (!Number(formUser.cbu)) {
    errors2.cbu = "El valor debe ser un entero";
  } else if (formUser.cbu.length !== 22) {
    errors2.cbu = "La longuitud del valor debe ser de 22 caracteres";
  }

  return errors2;
}

export default function FormularioRegistro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetail);
  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = React.useState({});
  const [errors2, setErrors2] = React.useState({});

  const [form, setForm] = React.useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    user: user.id,
    category: "",
    deshabilitar: "revisar",
    state: "inprocess",
    commentary: "",
  });

  const [formUser, setFormUser] = React.useState({
    cbu: user.cbu,
  });

  const handleInputChange2 = function (e) {
    console.log(e);

    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
    setErrors2(
      validation2({
        ...formUser,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleInputChange = function (e) {
    console.log(e);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();


    
    if (!form.name || !form.description || !form.price || !formUser.cbu) {
      alert("Debes rellenar todos los campos antes de crear el curso");
    } else {
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(errors2).length === 0
      ) {
        dispatch(createCourse(form));
        dispatch(updateUser(user.id, formUser));
        dispatch(allCourses());
        navigate(`/courseok`);
      }
    }
  }



  function handleAddCategory(e) {
    if (
      e.target.value !== "Categoria" &&
      !form.category.includes(e.target.value) &&
      form.category.length < 5
    ) {
      setForm({
        ...form,
        category: [...form.category, e.target.value],
      });
    }
  }

  function handleRemoveCategory(e) {
    e.preventDefault();
    setForm({
      ...form,
      category: form.category.filter((category) => category !== e.target.value),
    });
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link to="/home">
          <h1>AkademIT</h1>
        </Link>
      </div>
      <div className={style.title}>
        <h2>Creacion de curso</h2>

        <form class={style.form} onSubmit={(e) => handleOnSubmit(e)}>
          <div className={style.container1}>
            <div class={style.SubcontainerInput}>
              <label>Nombre del curso :</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.name}
              />
            </div>
            {errors.name && <p>{errors.name}</p>}

            <div class={style.SubcontainerInput}>
              <label>Precio $ :</label>
              <input
                type="text"
                name="price"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.price}
              />
            </div>

            {errors.price && <p>{errors.price}</p>}

            {!user.cbu ? (
              <div class={style.SubcontainerInput}>
                <label>CBU:</label>
                <input
                  type="text"
                  name="cbu"
                  placeholder="cbu"
                  autoComplete="off"
                  onChange={handleInputChange2}
                  value={formUser.cbu}
                />
              </div>
            ) : null}

            {errors2.cbu && <p>{errors2.cbu}</p>}

            <div class={style.SubcontainerInput}>
              <label>Imagen URL : </label>
              <input
                type="url"
                name="image"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.image}
              />
            </div>

            <div className={style.contenedorCategoria}>
              <div className={style.containerSelect}>
                <div className={style.select}>
                  <select
                    className={style.selecttodo}
                    onChange={(e) => handleAddCategory(e)}
                  >
                    <option>Categoria</option>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className={style.map}>
                {form.category &&
                  form.category.map((category) => (
                    <div className={style.containerSelectMap} key={category}>
                      <label className={style.select}> {category}</label>
                      <button
                        onClick={(e) => handleRemoveCategory(e)}
                        value={category}
                      >
                        X
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className={style.container2}>
            <div class={style.SubcontainerInput2}>
              <label>Descripcion del curso</label>
              <textarea
                name="description"
                id={style.description}
                autoComplete="off"
                onChange={handleInputChange}
                value={form.description}
                cols="30"
                rows="10"
              ></textarea>
            </div>
           
            <div className={style.containerbutton}>
            <Link to="/home">
                <button class={style.buttonYellow}>Volver</button>
              </Link>
              <button class={style.buttonYellow} type="submit">
                Crear{" "}
              </button>

              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
