import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from './courseLessons.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getCoursesById, removeCourseDetail} from "../../redux/actions";

export default function CourseLessons (){
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector((state) => state.courseDetail);
    const loggedUser = useSelector( state => state.loggedUsers);
    useEffect(() => {
        dispatch(getCoursesById(id));
        return () => {
        dispatch(removeCourseDetail());
        };
    }, []);
    return(
        <div>
            <NavBar/>
            <div className={style.container}>
                <div className={style.title}>
                    nombre del curso
                </div>
                <div className={style.body}>
                    <div className={style.left}>
                        video
                    </div>
                    <div className={style.right}>
                        lista de clases
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}