import React from 'react'
import styles from './mySalesInstructor.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { getAllPurchases } from './../../redux/actions/index';

export default function MySalesInstructor(user){
const loggedUser = useSelector(state=> state.loggedUsers)
const totalBuys = useSelector(state => state.purchases)

console.log(totalBuys, 'esto es total buys')

const dispatch = useDispatch()

useEffect(() =>{ dispatch(getAllPurchases())}, [])

    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Ventas</h2>
        <table className={styles.table} border="1" >
        <tbody>
            <tr>
            <th width="45%">Curso</th>
            <th width="15%">Precio</th>
            <th width="10%">Ventas</th>
            <th width="15%">Ganancia</th>
            <th width="15%">Acreditado</th>
            </tr>
            {/* { userPurchases && userPurchases.map(e => {
                return (
                    <tr>
                    <td width='65%'>{e.courseName}</td>
                    <td>{e.discount}</td>
                    <td>$ {e.total_price}</td>
                    </tr>
                )
            })} */}
    
        
        </tbody>
        </table>
        
      </div>

        </div>
    )
}