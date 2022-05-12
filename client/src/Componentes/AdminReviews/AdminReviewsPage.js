import React from 'react'
import styles from './adminReviewsPage.module.css'
import NavBar from "../NavBar/NavBar"
import Footer from './../Footer/Footer';
import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { getAllReviews, deleteReview } from '../../redux/actions';

export default function AdminReviewsPage(){
const dispatch = useDispatch()
const allReviews = useSelector(state=> state.reviews)
console.log(allReviews, 'esto es all reviews')

    useEffect(() => dispatch(getAllReviews()), [dispatch])

    function handleDelete(e){
        e.preventDefault(e);
        if (window.confirm("¿Desea eliminar este comentario?") === true) {
            dispatch(deleteReview(e.target.name));
            alert("Comentario eliminado.");
            dispatch(getAllReviews());
       
          } else {
            alert("Cancelado.")
          }
    }


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
            <th width='25%'>Comentario</th>
            <th width='8%'>Reportado</th>
            <th width='7%'></th>
            </tr>
         { allReviews && allReviews.map( e => {
             return (
                <tr>
                <td width='15%'>{e.userName}</td>
                <td width='25%'>{e.userId}</td>
                <td width='20%'>{e.course.name}</td>
                <td width='25%'>{e.coment}</td>
                <td width='8%'>{e.reported === "true"? "Si": "No"}</td>
                <td width='7%'><button name={e.id} onClick={handleDelete}>Eliminar</button></td>
                </tr>
             )
         })}
            
     
        </tbody>
        </table>
         </div>
        </div>
        </div>
        <Footer/>
        </div>
        
       
    )
}