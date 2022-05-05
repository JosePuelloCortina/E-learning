import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./FormCourses.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, allUser, allCourses } from "../../redux/actions/index";

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

export default function FormularioRegistro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetail);
  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = React.useState({});

  const [form, setForm] = React.useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    user: user.id,
    category: "",
  });

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
    if (!form.name || !form.description || !form.price) {
      alert("Debes rellenar todos los campos antes de registrarte");
    } else {
      dispatch(createCourse(form));
      dispatch(allCourses());
      navigate(`/courseok`);
    }
  };

  function handleSelect2(e) {
    setForm({
      ...form,
      category: e.target.value,
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

            <div class={style.SubcontainerCategori}>
              <label>Categoría :</label>
              <select class={style.category} onChange={(e) => handleSelect2(e)}>
                {categories?.map((c) => {
                  return (
                    <option key={c.id} name={c.name} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
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
              <button class={style.buttonYellow} type="submit">
                Crear{" "}
              </button>

              <Link to="/home">
                <button class={style.buttonYellow}>Volver</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
