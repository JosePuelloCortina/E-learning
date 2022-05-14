import React from 'react'
import styles from './mySalesInstructor.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { getAllPurchases } from './../../redux/actions/index';

export default function MySalesInstructor(user){
const loggedUser = useSelector(state=> state.loggedUsers)
const totalPurchases = useSelector(state => state.purchases)
const userSales = totalPurchases.filter(e => e.course.users[0].id === loggedUser[0])

console.log(userSales, 'esto es user sales')

const dispatch = useDispatch()

useEffect(() =>{ dispatch(getAllPurchases())}, [])

    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Ventas | Alumnos Inscriptos</h2>
        <table className={styles.table} border="1" >
        <tbody>
            <tr>
            <th width="40%">Curso</th>
            <th width="15%">Alumno Inscripto</th>
            <th width="15%">Valor Curso</th>
            
            <th width="15%">Ganancia</th>
            <th width="15%">Acreditado</th>
            </tr>
            { userSales && userSales.map(e => {
                return (
                    <tr>
                    <td width="40%">{e.course.name}</td>
                     <td width="15%">{e.user.name}</td>
                    <td width="15%">$ {e.total_price}</td>
                   
                    <td width="15%">$ {e.total_price/5*4}</td>
                    <td width="15%">{e.payed === true ? "Acreditado": "No"}</td>
                    </tr>
                )
            })}
    
        
        </tbody>
        </table>
        
      </div>

        </div>
    )
}