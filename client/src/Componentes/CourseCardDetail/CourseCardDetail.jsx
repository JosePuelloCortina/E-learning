import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  allCourses,
  getCoursesById,
  removeCourseDetail,
} from "../../redux/actions";
import styles from "./CourseCardDetail.module.css";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


function CourseCardDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCoursesById(id));
    dispatch(allCourses());
    return () => {
      dispatch(removeCourseDetail());
    };
  }, []);

  const detail = useSelector((state) => state.courseDetail);
  const courses = useSelector((state) => state.courses);
  const course = courses.filter((element) => element.id === id);

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
              <h4>Instructor: {course[0].users[0].name}</h4>
              <h4>Duracion: {detail.duration} Horas</h4>
            </div>
          <div className={styles.right}>
            <h4>Valor: ${detail.price}</h4>
            <button>Comprar</button>
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
              detail.clases.map((e) => {
                return (
                  <div className={styles.containerClases}>
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
