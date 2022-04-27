import React from 'react'
import styles from './userProfile.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import MyCoursesAlumn from './../MyCoursesAlumn/MyCoursesAlumn';
import MyCoursesInstructor from './../MyCoursesInstructor/MyCoursesInstructor';
import ProfileLateralBar from '../ProfileLateralBar/ProfileLateralBar';

export default function UserProfile(){
    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
            <div><h2>Mi Perfil</h2></div>
            <div className={styles.totalProfile}>
                <div className={styles.profileDetail}>
                    <ProfileLateralBar/>
                </div>
                <div className={styles.cursesDetail}>
                    <MyCoursesAlumn/>
                    <MyCoursesInstructor/>
                
                </div>
            </div>    
            </div>
           <Footer/>
        </div>
    )
}