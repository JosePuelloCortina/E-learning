import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import styles from './editProfile.module.css'
import {Link, useNavigate} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getUserById, updateUser } from '../../redux/actions/index';
import { useParams} from 'react-router-dom'



export default function EditProfile() {
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=> {dispatch(getUserById(id))},[dispatch, id])
    const userInit = useSelector(state => state.user)
    const navigate = useNavigate()
    
    const[ input, setInput] = useState({
        id:id,
        name:userInit.name,
        password:userInit.password,
        confirmPassword: undefined,
        email:userInit.email
    })
    const [errors, setErrors] = useState({})

    console.log(input)
    
    function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
}

function handleSubmit(e){
    if (!input.name || !input.email || !input.password || !input.confirmPassword) {
        alert('Por favor complete todos los campos.')
    } else {

    if(window.confirm('¿Desea modificar sus datos?') === true){
    dispatch(updateUser(id, input))
    alert("Cambios guardados.")
    navigate(`/profile/${id}`);
} else {
    navigate(`/profile/${id}`);
}
    }
}

    function validate(input) {
        let emailExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])\S{5,15}/
        let errors = {};
        if(!input.name) {
            errors.name = "Por favor complete su nombre.";
        }
        if (!input.email) {
            errors.email = "Por favor agregue un electrónico.";
        }
        if (!input.password) {
            errors.password = "Agregue una nueva contraseña.";
        }
        if (!input.confirmPassword) {
            errors.confirmPassword = "Confirme su nueva contraseña.";
        }

        if (input.confirmPassword && input.confirmPassword !== input.password) {
            errors.confirmPassword = "Las contraseñas no coinciden.";
        }
        if(input.email && !emailExp.test(input.email)){
            errors.email= "Ingrese una dirección de correo válida."
        }
        if(input.password && !passExp.test(input.password)){
            errors.password= "La contraseña debe contener entre 5 y 15 caracteres, al menos una mayúscula, una minúscula un número, y un caracter especial."
        }
        return errors;
    
    } 


    return(
        <div>
        <NavBar/>
        <div className={styles.container}>
        <div><h2>Mis Datos</h2></div>
            <div className={styles.editPanel}>
            <form onSubmit={handleSubmit}>
            <div className={styles.cont2}>
            <div className={styles.left}>
                <div>
                    <label>Nombre y Apellido</label>
                    <input type="text" 
                            value={input.name} 
                            onChange={handleInputChange}
                            name="name"
                            />
                    {errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text" 
                            value={input.email} 
                            onChange={handleInputChange} 
                            name="email"
                            />
                    {errors.email && (
                        <p className="error">{errors.email}</p>
                    )}
                </div>
            </div>

            <div className={styles.right}>
                <div>
                    <label>Nueva Contraseña</label>
                    <input type="password" 
                            value={input.password} 
                            onChange={handleInputChange}
                            name="password"
                    />

                    {errors.password && (
                        <p className="error">{errors.password}</p>
                    )}  
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type="password" 
                            value={input.confirmPassword}
                            onChange={handleInputChange}
                            name="confirmPassword"
                            />
                            {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                </div>
                
                </div>
                </div>
                <div className={styles.buttons}>
                <Link to={`/profile/${id}`}>
                <button className={styles.save}>Volver atrás</button>
                </Link>
                <button type="submit" className={styles.save}>Guardar Cambios</button>
               
                </div>
                </form>
            </div>
    
        </div>
        <Footer/>
        </div>
    )
}