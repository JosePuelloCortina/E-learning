import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getCoursesById,
  removeCourseDetail,
  purchase
} from "../../redux/actions";
import styles from "./CourseCardDetail.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'



function CourseCardDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getCoursesById(id));
    return () => {
      dispatch(removeCourseDetail());
    };
  }, []);
  const cantidad = 1;
  const detail = useSelector((state) => state.courseDetail);
  const loggedUser = useSelector( state => state.loggedUsers);
  console.log(loggedUser, "este es el usuario" )
 
 
  // const idCourse = detail.id
   console.log(id, "ESTO ES IDcourse")

  function handlePurchase(){
    if(loggedUser.length === 0){
      alert("Para comprar el curso debes iniciar sesión")
      navigate('/user')
    }else{
      dispatch(purchase({userId: loggedUser, courseId: id, quantity: cantidad  }))
      navigate('/purchaseok')
  }
  }
  return (
    <div>
    <NavBar/>
    <div className={styles.container}>
    
      {detail ? (
        <div className={styles.cardDetail}>
        <div className={styles.title}><h3>{detail.name}</h3></div>
        <div className={styles.detail}>
            <div className={styles.left}>
              <div className={styles.image}>
                <img src={detail.image} alt="" />
              </div>
              <h4>{detail.description}</h4>
              {detail.users && detail.users.map((user, index) => {
                return(
                  <div key={index}>
                      <h4>Instructor: {user.name}</h4>
                  </div>
              )})}
              <h4>Duracion: {detail.duration} Horas</h4>
              <h4>Cantidad: {cantidad}</h4>
            </div>
          <div className={styles.right}>
            <h4>Valor: ${detail.price}</h4>
            <button onClick={() => handlePurchase()}>Comprar</button>
          </div>
        </div>
          
            
            <div className={styles.courseInfo}>
              <h4>Puntuación: </h4>
              <div>
                {
                detail.review === 0 ? <p>Este curso no tiene calificacion</p> :
                  detail.review === 1 ? <p>⭐</p> :
                    detail.review === 2 ? <p>⭐⭐</p>:
                      detail.review === 3 ? <p>⭐⭐⭐</p>:
                        detail.review === 4 ? <p>⭐⭐⭐⭐</p>:
                          <p>⭐⭐⭐⭐⭐</p>
                }
              </div>
              
              
            </div>

            {detail.clases &&
              detail.clases.map((e, index) => {
                return (
                  <div key={index} className={styles.containerClases}>
                    <ul>
                      <li>{e.name}</li>
                      <li>{e.duration}</li>
                      <li>{e.description}</li>
                    </ul>
                  </div>
                );
              })}
            <Link to="/home">
              <button>Volver</button>
            </Link>
          
        </div>
      ) : (
        <div>...Loading</div>
      )}
      
    </div>
    <Footer/>
    </div>
  );
}

export default CourseCardDetail;
