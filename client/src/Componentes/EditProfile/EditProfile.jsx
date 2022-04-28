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
        password:undefined,
        confirmPassword: undefined,
        email:userInit.email
    })

    console.log(input)
    
    function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}

function handleSubmit(e){
    if(window.confirm('¿Desea modificar sus datos?') === true){
    dispatch(updateUser(id, input))
    alert("Cambios guardados.")
    navigate(`/profile/${id}`);
} else {
    alert('Cancelado')
}
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
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text" 
                            value={input.email} 
                            onChange={handleInputChange} 
                            name="email"
                            />
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
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type="password" 
                            value={input.confirmPassword}
                            onChange={handleInputChange}
                            name="confirmPassword"
                            />
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