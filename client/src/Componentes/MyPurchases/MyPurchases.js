import React from 'react'
import styles from './myPurchases.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { getAllPurchases } from './../../redux/actions/index';

export default function MyPurchases(user){
const loggedUser = useSelector(state=> state.loggedUsers)
const totalBuys = useSelector(state => state.purchases)
const userPurchases = totalBuys.filter(e => e.userId === loggedUser[0])
console.log(totalBuys, 'esto es total buys')
console.log(userPurchases, 'esto es user purchases')
const dispatch = useDispatch()

useEffect(() =>{ dispatch(getAllPurchases())}, [])

    return(
        <div className={styles.container}>
        <div className={styles.title}>
        <h2>Mis Compras</h2>
        <table className={styles.table} border="1" >
        <tbody>
            <tr>
            <th width='65%'>Curso</th>
            <th>Descuento</th>
            <th>Precio Final</th>
            </tr>
            { userPurchases && userPurchases.map(e => {
                return (
                    <tr>
                    <td width='65%'>{e.courseName}</td>
                    <td>{e.discount}</td>
                    <td>$ {e.total_price}</td>
                    </tr>
                )
            })}
    
        
        </tbody>
        </table>
        
      </div>

        </div>
    )
}