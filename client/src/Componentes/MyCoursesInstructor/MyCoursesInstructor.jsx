import React, { useEffect } from "react";
import style from "./myCoursesInstructor.module.css";
import CardMini from "../CardMini/CardMini";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCourses } from "../../redux/actions";

export default function MyCoursesInstructor() {
  const user = useSelector((state) => state.userDetail);
  const courses = useSelector((state) => state.coursesBackUp);

  const dispatch = useDispatch();

  let myCourses = courses.filter(
    (course) => course.users[0].name === user.name
  );

  useEffect(() => {
    dispatch(allCourses());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Mis Cursos | Instructor |</h2>
        <Link to="/formCourses">
          <button>Crear Curso</button>
        </Link>
      </div>
      <div className={style.cursesInstructor}>
        {myCourses &&
          myCourses.map((e) => {
            return <CardMini key={e.id} name={e.name} id={e.id} />;
          })}
      </div>
    </div>
  );
}
