import React from 'react'
import styles from './adminReviewsPage.module.css'
import NavBar from "../NavBar/NavBar"
import Footer from './../Footer/Footer';

export default function AdminReviewsPage(){
    return(
    <div>
        <NavBar/>
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Reseñas</h2>
        </div>
        <div className={styles.body}>
         <div className={styles.top}>

         </div>
         <div className={styles.bottom}>

         <table className={styles.table} border="1" >
        <tbody>
            <tr>
            <th width='15%'>Nombre</th>
            <th width='25%'>ID Usuario</th>
            <th width='20%'>Curso</th>
            <th width='30%'>Comentario</th>
            <th width='10%'></th>
            </tr>
        
            
     
        </tbody>
        </table>
         </div>
        </div>
        </div>
        <Footer/>
        </div>
        
       
    )
}