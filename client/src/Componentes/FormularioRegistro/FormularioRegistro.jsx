import React from 'react'
import { Link } from 'react-router-dom'
import style from './FormularioRegistro.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { createUser } from '../../redux/actions/index'





export default function FormularioRegistro() {

  const dispatch = useDispatch()
  // const history = useHistory()

  const [form, setForm] = React.useState({

    name: "",
    password: "",
    email: "",
    img: "",
    role: ""
  })




  const handleInputChange = function (e) {

    console.log(e);

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }







  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (form.name !== 0 || form.password !== 0 || form.email !== 0 || form.img !== 0) {
      dispatch(createUser(form))
      alert('Usuario creado correctamente!')
      // setTimeout(() => {
      //   history.push('/home')
      // }, 1000);
    } else {
      alert('Debes rellenar todos los campos antes de registrarte')
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

            <br></br>

            <label>User name</label>
            <input placeholder='Ingresa tu nombre...' type='text' name='name' autoComplete='off' onChange={handleInputChange} value={form.name} />

          </div>

          <div class={style.SubcontainerInput}>
            <br></br>
            <label>E-mail</label>
            <input placeholder='Ingresa tu e-mail...' type='text' name='email' autoComplete='off' onChange={handleInputChange} value={form.email} />

          </div>

          <div class={style.SubcontainerInput}>
            <br></br>
            <label>Password</label>
            <input placeholder='Ingresa tu contraseña...' type='Password' name='password' autoComplete='off' onChange={handleInputChange} value={form.password} />

          </div>

          <div class={style.SubcontainerInput} >
            <br></br>
            <label>Imagen</label>
            <input placeholder='Ingresa tu imagen' type='img' name='img' autoComplete='off' onChange={handleInputChange} value={form.img} />
          </div>


          <div class={style.SubcontainerInput}>
            <br></br>
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