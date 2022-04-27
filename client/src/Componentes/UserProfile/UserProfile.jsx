import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import styles from './userProfile.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import MyCoursesAlumn from './../MyCoursesAlumn/MyCoursesAlumn';
import MyCoursesInstructor from './../MyCoursesInstructor/MyCoursesInstructor';
import ProfileLateralBar from '../ProfileLateralBar/ProfileLateralBar';
import { getUserById } from '../../redux/actions';
import { useParams} from 'react-router-dom'

export default function UserProfile(){
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect( ()=> {getUserById(id)},[dispatch])
    const user = useSelector(state => state.user)

    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
            <div><h2>Mi Perfil</h2></div>
            <div className={styles.totalProfile}>
                <div className={styles.profileDetail}>
                    <ProfileLateralBar user={user}/>
                </div>
                <div className={styles.cursesDetail}>
                    <MyCoursesAlumn user={user} />
                    <MyCoursesInstructor user={user}/>
                
                </div>
            </div>    
            </div>
           <Footer/>
        </div>
    )
}