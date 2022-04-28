import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './FormularioRegistro.module.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/actions/index'


export function validation(form) {
  let errors = {}
  console.log(errors)

    // USUARIO-(NAME)

  if (!form.name) {
    errors.name = 'se requiere nombre'
  } else if (form.name.match(!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/)) {
    errors.name = "solo se admiten un nombre"
  }


  // USUARIO-(EMAIL)

  if (!form.email) {
    errors.user = 'se requiere e-mail'
  } else if (!form.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    errors.email = "solo se admiten e-mail"
  }


  // PASSWORD (CONTRASEÑA ALFANUMERICO)

  if (!form.password) {
  errors.password = 'se requiere password'
} else if (!form.password.match(/^[A-Za-z0-9]+$/)) {
  errors.password = "se requiere clave alfanumerica"
}
 


  return errors
}


export default function FormularioRegistro() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const [errors, setErrors] = React.useState({})

  const [form, setForm] = React.useState({

    name: "",
    password: "",
    email: "",
    image: "",
    role: ""

  })



   


  const handleInputChange = function (e) {

    console.log(e);

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors(validation({
      ...form,
      [e.target.name]: e.target.value
    }))
  }



  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.password || !form.email ) {
      alert('Debes rellenar todos los campos antes de registrarte')
    }
     else
     {
   
      dispatch(createUser(form))
      alert('Usuario creado correctamente!')
         setTimeout(() => {
          navigate("/home")
      }, 1000);
  }

  }
  function handleSelect2(e) {
    setForm({
      ...form,
      role: e.target.value
    })
  }

  


  return (
    <div className={style.container}>


      <form class={style.form} onSubmit={(e) => handleOnSubmit(e)}>

        <div class={style.containerInput}>
          <div class={style.SubcontainerInput}>

         

            <label>User name</label>
            <input placeholder='Ingresa tu nombre...' type='text' name='name' autoComplete='off' onChange={handleInputChange} value={form.name} />
          </div>
          {errors.name && <p>{errors.name}</p>}


          <div class={style.SubcontainerInput}>
            
            <label>E-mail</label>
            <input placeholder='Ingresa tu e-mail...' type='text' name='email' autoComplete='off' onChange={handleInputChange} value={form.email} />

          </div>
          {errors.email && <p>{errors.email}</p>}

          <div class={style.SubcontainerInput}>
         
            <label>Password</label>
            <input placeholder='Ingresa tu contraseña...' type='Password' name='password' autoComplete='off' onChange={handleInputChange} value={form.password} />

          </div>
          {errors.password && <p>{errors.password}</p>}

          <div class={style.SubcontainerInput} >
            <br></br>
            <label>Imagen</label>
            <input placeholder='Ingresa tu imagen' type='url' name='img' autoComplete='off' onChange={handleInputChange} value={form.img} />
          </div>


          <div class={style.SubcontainerInput}>
            
            <label>Role</label>
            <select onChange={(e) => handleSelect2(e)}>
              <option value="instructor">Instructor</option>
              <option value="alumno">Alumno</option>
            </select>
          </div>
        </div>

          <button class={style.buttonRegistro} type='submit' >REGISTRATE </button>
        

     


      </form>



    </div>
  )
}