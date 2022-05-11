import React from 'react'
import styles from './purchaseConfirm.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { useParams } from "react-router";
import {
  confirmPayment,
    getCoursesById,
    removeCourseDetail
  } from "../../redux/actions";


export default function PurchaseConfirm(){
    const navigate= useNavigate()
    const dispatch = useDispatch();
    let { id } = useParams();
    const user = useSelector((state) => state.userDetail)
    id = user.id
    useEffect(() => {
        dispatch(getCoursesById(id));
        dispatch(confirmPayment())
        return () => {
          dispatch(removeCourseDetail());
        };
      }, []);

    useEffect(()=>{redirect() })

    function redirect(){
        setTimeout(() => { navigate(`/home`)
        }, 1000);
        
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