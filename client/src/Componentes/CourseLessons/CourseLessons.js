import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from './courseLessons.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getCoursesById, removeCourseDetail, getAllClasses} from "../../redux/actions";
import LessonsList from "../LessonsList/LessonsList";
import LessonsVideo from './../LessonsVideo/LessonsVideo';

export default function CourseLessons (){
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector((state) => state.courseDetail);
    const loggedUser = useSelector( state => state.loggedUsers);
    const totalClasses = useSelector( state => state.classes)
    console.log(totalClasses, 'esto es total clases')
    const courseClasses = totalClasses.filter( c => c.courseId === course.id)
    console.log(courseClasses, 'esto es course clases')

    const [currentLesson, setCurrentLesson] = useState({})
    const [review, setReview] = useState(false)

    
    useEffect(() => {
        dispatch(getCoursesById(id));
        return () => {
        dispatch(removeCourseDetail());
        };
    }, []);
    
    useEffect(()=> dispatch(getAllClasses()), [])

    function handleClose(e){
        e.preventDefault(e);
        setReview(false);
    }
    return(
        <div>
            <NavBar/>
            <div className={review===false?style.container: style.hiddenContainer}>
                <div className={style.title}>
                    <h1>{course.name}</h1>
                </div>
                <div className={style.body}>
                    <div className={style.left}>
                        <LessonsVideo lessons={courseClasses}/>
                    </div>
                    <div className={style.right}>
                        <LessonsList lessons={courseClasses}
                             review={review}
                            setReview={setReview}
                        />
                    </div>
                   
                </div>
            </div>
           
            <Footer/>
            <main className={review? style.visible:style.hidden }>
                        <button className={style.close} onClick={handleClose}>Cerrar</button>
                        <h4>Calificar el curso de {course.name}</h4>
                        
                        <label>¿Qué puntaje le das?</label>
                        <div className={style.calif}>
                        <div className={style.star}>
                        <p>⭐</p>
                        <input type='radio'/>
                        </div>
                        <div className={style.star}>
                        <p>⭐⭐</p>
                        <input type='radio'/>
                        </div>
                        <div className={style.star}>
                        <p>⭐⭐⭐</p>
                        <input type='radio'/>
                        </div>
                        <div className={style.star}>
                        <p>⭐⭐⭐⭐</p>
                        <input type='radio'/>
                        </div>
                        <div className={style.star}>
                        <p>⭐⭐⭐⭐⭐</p>
                        <input type='radio'/>
                        </div>
                        <br/>
                        <br/>
                        </div>
                        <label>Contanos tu experiencia</label>
                        <textarea placeholder="Escribe tu comentario.."/>
                        <button className={style.send}>Enviar</button>
                        
                    </main>
        </div>
    )
}