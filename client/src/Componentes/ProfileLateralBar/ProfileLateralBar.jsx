import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import styles from './profileLateralBar.module.css'
import {Link, useParams} from 'react-router-dom'
import img from '../../Images/avatar1.jpg'
import { getUserById } from '../../redux/actions';

export default function ProfileLateralBar() {
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect( ()=> {getUserById(id)},[dispatch])
    const user = useSelector(state => state.user)

    return(
        <div className={styles.container}>
        
        <h3>{user.name}</h3>

        <img src={img} alt='avatar' />
        <h4>{user.email}</h4>
        <Link to="/profile/edit">
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>
        </div>
    )
}