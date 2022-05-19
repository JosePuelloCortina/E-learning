import React from 'react'
import styles from './adminEarningsPage.module.css'
import NavBar from "../NavBar/NavBar"
import Footer from './../Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { Bar as ChartJS } from 'chart.js/auto'
import {Bar} from 'react-chartjs-2';

import { getAllReviews, deleteReview, filterByReported, 
    allUser, searchReviewById, allCourses, 
    getAllPurchases, filterPurchasesByCourse,
    filterSalesByPayed, searchSaleById} from '../../redux/actions';

export default function AdminSalesPage(){
const dispatch = useDispatch()
const allPurchases = useSelector(state => state.purchases)
const allUsers = useSelector(state => state.user)
const allIds = allUsers.filter(e => e.id)
const courses = useSelector(state => state.courses)
// console.log(allPurchases, 'esto es all purchases')


    useEffect(() => dispatch(allUser()), [dispatch])
    useEffect(() => dispatch(allCourses()), [dispatch])
    useEffect(() => dispatch( getAllPurchases()), [dispatch])
    const [input, setInput] = useState("")


const allEarnings = allPurchases.map( e => e.total_price)
const totalEarnings = allEarnings.reduce((prev, curr) => prev + curr, 0)
const finalEarnings = (totalEarnings * 20) / 100
const totalPago = ((100 - 20) / 100 ) * totalEarnings


const Admin = allUsers.filter(t => t.roles[0].tipo == "admin");
const totalUsers = allUsers.length;
const totalInstructor = allUsers.filter(t => t.roles[0].tipo == "instructor");
const totalAlumnos = allUsers.filter(t => t.roles[0].tipo == "alumno");
const totalCourses = courses.length;
const purchases = allPurchases.map(t => t.total_price)
let totalPurchase = 0;
for (let i=0; i< purchases.length; i++){
    totalPurchase += purchases[i]
}

const user = {
    labels: ['Total Usuarios','Admin', 'Instructor', 'Alumno'],
    datasets:[
        {
            label: 'Users',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [totalUsers, Admin.length, totalInstructor.length, totalAlumnos.length]
        }
    ]
}

const purchase = {
    labels: ['Total Ganancias', 'Admin', 'Instructor'],
    datasets:[
        {
            label: 'Ganancias $',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [totalPurchase, finalEarnings, totalPago]
        }
    ],

}


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
                        <h2>Promedio de usuarios por role</h2>          
                        <Bar
                            data={user}
                            
                        />            
                    </div>
                    <div className={styles.numbers}>
                        <h2>Promedio de ganancias</h2>          
                        <Bar
                            data={purchase}
                        />            
                    </div>
                    <div className={styles.totalEarnings}>
                        <h2>Total de cursos: {totalCourses} </h2>                     
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        
       
    )
}