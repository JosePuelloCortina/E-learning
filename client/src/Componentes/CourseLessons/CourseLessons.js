import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from './courseLessons.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getCoursesById, removeCourseDetail, getAllClasses} from "../../redux/actions";
import LessonsList from "../LessonsList/LessonsList";

export default function CourseLessons (){
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector((state) => state.courseDetail);
    const loggedUser = useSelector( state => state.loggedUsers);
    const totalClasses = useSelector( state => state.classes)
    console.log(totalClasses, 'esto es total clases')
    const courseClasses = totalClasses.filter( c => c.courseId === course.id)
    console.log(courseClasses, 'esto es course clases')
    useEffect(() => {
        dispatch(getCoursesById(id));
        return () => {
        dispatch(removeCourseDetail());
        };
    }, []);
    
    useEffect(()=> dispatch(getAllClasses()), [])
    return(
        <div>
            <NavBar/>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>{course.name}</h1>
                </div>
                <div className={style.body}>
                    <div className={style.left}>
                        video
                    </div>
                    <div className={style.right}>
                        <LessonsList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}