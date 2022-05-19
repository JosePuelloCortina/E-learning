import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./FormClass.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createClass,
  allUser,
  allCourses,
  getAllClasses,
  getCoursesById,
  editCoursesById,
} from "../../redux/actions/index";

export function validation(form) {
  let errors = {};
  console.log(errors);

  // USUARIO-(NAME)

  if (!form.name) {
    errors.name = "Ingrese nombre de la clase";
  }

  // DURACION

  if (!form.duration) {
    errors.duration = "Ingrese la duracion de la clase";
  }

  // DESCRIPCION

  if (!form.description) {
    errors.description = "Ingrese la descripcion de la clase";
  }

  return errors;
}



export default function FormClass() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const course = useSelector((state) => state.courseDetail);

  const [errors, setErrors] = React.useState({});

  const [clasesCarrito, setclasesCarrito] = React.useState([]);

  const [form, setForm] = React.useState({
    name: "",
    duration: "",
    description: "",
    url: "",
    id: course.id,
    deshabilitar: "false",
    state:"inprocess",
  });



  const formCourse = {
    name: course.name,
    description: course.description,
    price: course.price,
    image: course.image,
    deshabilitar: course.deshabilitar,
    category:course.category,
    state:"inprocess",
    commentary:course.commentary
}







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
    if (!form.name || !form.duration || !form.description) {
      alert("Debes rellenar todos los campos antes de registrarte");
    } else {
      dispatch(createClass(form));
      dispatch(getAllClasses());
      dispatch(editCoursesById(course.id,formCourse));
      dispatch(getCoursesById(course.id));
      navigate(`/Classok`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link to="/home">
          <h1>AkademIT</h1>
        </Link>
      </div>
      <div className={style.title}>
        <h2>Creacion de Clases</h2>
        <h2>Curso : {course.name}</h2>

        <form className={style.form} onSubmit={(e) => handleOnSubmit(e)}>
          <div className={style.container1}>
            <div className={style.SubcontainerInput}>
              <label>Nombre de la clase :</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.name}
              />
            </div>
            {errors.name && <p>{errors.name}</p>}

            <div className={style.SubcontainerInput}>
              <label>Duracion :</label>
              <input
                type="text"
                name="duration"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.duration}
              />
            </div>
            {errors.duration && <p>{errors.duration}</p>}

            <div className={style.SubcontainerInput}>
              <label>Video URL : </label>
              <input
                type="url"
                name="url"
                autoComplete="off"
                onChange={handleInputChange}
                value={form.url}
              />
            </div>
          </div>

          <div className={style.container2}>
            <div className={style.SubcontainerInput2}>
              <label>Descripcion de la clase</label>
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
            <Link to={`/courselessons/${course.id}`}>
                <button className={style.buttonYellow}>Volver</button>
              </Link>
              <button className={style.buttonYellow} type="submit">
                Agregar
              </button>

              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
