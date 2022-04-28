import React from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import { validateUser } from '../../redux/actions/index'
import { useDispatch } from 'react-redux'



export default function Login() {

  const dispatch = useDispatch();

  const [validate, setValidate] = React.useState({

    user: '',
    password: '',

  })


  const handleInputChange = function (e) {

    console.log(e);

    setValidate({
      ...validate,
      [e.target.name]: e.target.value
    });

  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validate.user !== 0 || validate.password !== 0 ) {
      dispatch(validateUser(validate))
      alert('Usuario creado correctamente!')
    } else {
      alert('Debes rellenar todos los campos antes de registrarte')
    }
  }




  return (
    <div class={style.container}>


      <form class={style.form}>



        <div class={style.containerInput}>

          <div class={style.SubcontainerInput}>
          <br></br>
            <label>Usuario</label> 
            <input placeholder='Ingresa tu e-mail...' type='text' name='e-mail' autoComplete='off' onChange={handleInputChange} value={validate.user}  />
          </div>

          
          <div class={style.SubcontainerInput}>
          <br></br>
            <label>Password</label> 
            <input placeholder='Ingresa tu Password...' type='Password' name='Password' autoComplete='off' onChange={handleInputChange} value={validate.password}  />
          </div>

        </div>



        <div class={style.divButton2}>
          <button type='submit' >INGRESAR</button>
          <button type='submit' >INGRESAR CON GOOGLE</button>
        </div>

        <div class={style.divButton1}>
          <button class={style.buttonRegistro} type='submit' >REGISTRARME</button>
        </div>


      </form>



    </div>
  )
}