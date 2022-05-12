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
         <h3>Filtrar por: </h3>
            <select>
                <option>Curso</option>
            </select>

            <select>
                <option>Todos</option>
                <option>Reportados</option>
            </select>

            <select>
                <option>ID Usuario</option>
            </select>
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