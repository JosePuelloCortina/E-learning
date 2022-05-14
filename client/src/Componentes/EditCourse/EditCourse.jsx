import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./EditCourse.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourse,
  allUser,
  allCourses,
  editCoursesById,
  getCoursesById,
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

export default function EditCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetail);
  const coursestate = useSelector((state) => state.courseDetail);
  const categories = useSelector((state) => state.categories);
  const categoriesName = coursestate.categories.map((e) => e.name);
  const [errors, setErrors] = React.useState({});
  console.log(categoriesName, "lpm");
  const [form, setForm] = React.useState({
    name: coursestate.name,
    description: coursestate.description,
    image: coursestate.image,
    price: coursestate.price,
    category: categoriesName,
    state: "inprocess",
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

    dispatch(editCoursesById(coursestate.id, form));
    dispatch(allCourses());
    navigate(`/CourseEditok/${coursestate.id}`);
  };

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
        <h2>Edite su curso : {coursestate.name} </h2>

        <form class={style.form} onSubmit={(e) => handleOnSubmit(e)}>
          <div className={style.container1}>
            <div class={style.SubcontainerInput}>
              <label>Editar Nombre del curso :</label>
              <input
                type="text"
                // placeholder={coursestate.name}
                name="name"
                onChange={handleInputChange}
                value={form.name}
              />
            </div>
            {errors.name && <p>{errors.name}</p>}

            <div class={style.SubcontainerInput}>
              <label>Editar Precio $ :</label>
              <input
                type="text"
                // placeholder={coursestate.price}
                name="price"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.price}
              />
            </div>
            {errors.price && <p>{errors.price}</p>}

            <div class={style.SubcontainerInput}>
              <label>Editar Imagen URL : </label>
              <input
                type="url"
                // placeholder={coursestate.image}
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
              <label>Editar descripcion del curso</label>
              <textarea
                name="description"
                // placeholder={coursestate.description}
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
                Editar{" "}
              </button>

              <Link to={`/courselessons/${coursestate.id}`}>
                <button class={style.buttonYellow}>Volver</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
