import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import styles from './profileLateralBar.module.css'
import {Link, useParams} from 'react-router-dom'
import img from '../../Images/avatar1.jpg'

export default function ProfileLateralBar() {
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect( ()=> {},[dispatch])

    return(
        <div className={styles.container}>
        
        <h3>Andrea Hubacek</h3>

        <img src={img} alt='avatar' />
        <h4>hubacekk@gmail.com</h4>
        <Link to="/profile/edit">
        <button className={styles.editButton}>Editar mis datos</button>
        </Link>
        </div>
    )
}