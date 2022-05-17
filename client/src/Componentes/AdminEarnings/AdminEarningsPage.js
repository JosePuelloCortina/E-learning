import React from 'react'
import styles from './adminEarningsPage.module.css'
import NavBar from "../NavBar/NavBar"
import Footer from './../Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { getAllReviews, deleteReview, filterByReported, 
    allUser, searchReviewById, allCourses, 
    getAllPurchases, filterPurchasesByCourse,
    filterSalesByPayed, searchSaleById} from '../../redux/actions';

export default function AdminSalesPage(){
const dispatch = useDispatch()
const allPurchases = useSelector(state => state.purchases)
const allUsers = useSelector(state => state.reviews)
const allIds = allUsers.filter(e => e.id)
const courses = useSelector(state => state.courses)
// console.log(allPurchases, 'esto es all purchases')


    useEffect(() => dispatch(allUser()), [dispatch])
    useEffect(() => dispatch(allCourses()), [dispatch])
    useEffect(() => dispatch( getAllPurchases()), [dispatch])
    const [input, setInput] = useState("")


const allEarnings = allPurchases.map( e => e.total_price)
console.log(allEarnings, 'eesto es all earnings')
const totalEarnings = allEarnings.reduce((prev, curr) => prev + curr, 0)
console.log(totalEarnings, 'esto es total earnings')
const finalEarnings = totalEarnings / 5
console.log(finalEarnings, 'final earnings')

    return(
    <div>
        <NavBar/>
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Estadísticas</h2>
        </div>
        <div className={styles.body}>
         <div className={styles.insideBody}>

         <div className={styles.numbers}>
            <h2>Datos totales</h2>
            <p>Total Usuarios</p>
            <p>Total Instructores</p>
            <p>Total Alumnos</p>
            <p>Total Cursos</p>
            <p>Total Ventas</p>
            
         </div>
         <div className={styles.totalEarnings}>
            <h2>Ganancias Totales</h2>
            <h3>$ {finalEarnings}</h3>
         </div>
        
        
         </div>
         
        </div>
        </div>
        <Footer/>
        </div>
        
       
    )
}