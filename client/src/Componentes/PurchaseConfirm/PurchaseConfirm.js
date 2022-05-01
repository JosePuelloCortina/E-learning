import React from 'react'
import styles from './purchaseConfirm.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function PurchaseConfirm(){
    const navigate= useNavigate()
    useEffect(()=>{redirect() })

    function redirect(){
        setTimeout(() => { navigate('/home')
        }, 6000);
        
    }
    return(
        <div className={styles.container}>
            <h2>Compra realizada exitosamente!</h2>
            <h3>En unos segundos serás redirigido...</h3>
            <br/>
            <br/>
            <h1>AkademIT</h1>
            <br/>
            <br/>
            <Link to='/home'>
            <p>Si no fuiste redirigido clickea aqui.</p>
            </Link>
        </div>
    )

}