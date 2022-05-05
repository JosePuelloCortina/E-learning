import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./FormCourses.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, allUser, allCourses } from "../../redux/actions/index";



 

export default function FormularioRegistro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetail);
  const categories = useSelector((state) => state.categories);


  const [form, setForm] = React.useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    user: user.id,
    category: ""
    
  });


  const handleInputChange = function (e) {
    console.log(e);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
 
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
  }



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
              placeholder="Ingresa nombre del curso..."
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleInputChange}
              value={form.name}
            />
          </div>

          <div class={style.SubcontainerInput}>
            <label>Precio $ :</label>
            <input
              placeholder="Ingresa valor del curso..."
              type="text"
              name="price"
              autoComplete="off"
              onChange={handleInputChange}
              value={form.price}
            />
          </div>

      

          
          <div class={style.SubcontainerInput}>
            <br></br>
            <label>Imagen URL : </label>
            <input
              placeholder="Ingresa tu imagen"
              type="url"
              name="image"
              autoComplete="off"
              onChange={handleInputChange}
              value={form.image}
            />
          </div>

          <div class={style.SubcontainerInput} >
            <select class={style.category} onChange={(e) => handleSelect2(e)}>
            {categories ?.map((c) => {
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
            <input id={style.description}
              type="text"
              name="description"
              autoComplete="off"
              onChange={handleInputChange}
              value={form.description}
            />
          </div>

          <div className={style.containerbutton}>

<button class={style.buttonYellow} type="submit">
            crear{" "}
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
