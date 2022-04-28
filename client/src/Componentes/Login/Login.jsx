import React from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import { validateUser } from '../../redux/actions/index'
import { useDispatch } from 'react-redux'



export function validation(validate) {
  let errors = {}
  console.log(errors)


  // USUARIO-(EMAIL)

  if (!validate.user) {
    errors.user = 'se requiere e-mail'
  } else if (!validate.user.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    errors.user = "solo se admiten e-mail"
  }

  

  // PASSWORD (CONTRASEÑA ALFANUMERICO)

  if (!validate.password) {
  errors.password = 'se requiere password'
} else if (!validate.password.match( /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^\da-zA-Z])\S{5,15}/)) {
  errors.password = "se requiere clave alfanumerica"
}
 


  return errors
}


export default function Login() {

  const dispatch = useDispatch();

  const [errors, setErrors] = React.useState({})

  const [validate, setValidate] = React.useState({

    user: '',
    password: ''

  })


  const handleInputChange = function (e) {

    console.log(e);

    setValidate({
      ...validate,
      [e.target.name]: e.target.value
    });
    setErrors(validation({
      ...validate,
      [e.target.name]: e.target.value
    }))

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


      <form class={style.form} onSubmit={(e) => handleOnSubmit(e)} >



        <div class={style.containerInput}>

          <div class={style.SubcontainerInput}>
          <br></br>
            <label>Usuario</label> 
            <input placeholder='Ingresa tu e-mail...' type='text' name='user' autoComplete='off' onChange={handleInputChange} value={validate.user}  />
          </div>
          {errors.user && <p>{errors.user}</p>}
          
          <div class={style.SubcontainerInput}>
          <br></br>
            <label>Password</label> 
            <input placeholder='Ingresa tu Password...' type='password' name='password' autoComplete='off' onChange={handleInputChange} value={validate.password}  />
          </div>
          {errors.password && <p>{errors.password}</p>}

        </div>



        <div class={style.divButton2}>
          <button type='submit' >INGRESAR</button>
          <button type='submit' >INGRESAR CON GOOGLE</button>
        </div>

        <div class={style.divButton1}>
        <Link to="/form"> <button class={style.buttonRegistro} type='submit' >REGISTRARME</button></Link>
        
        </div>


      </form>



    </div>
  )
}