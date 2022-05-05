import React from "react";
import styles from "./myCoursesAlumn.module.css";
import CardMini from "../CardMini/CardMini";

import { useSelector } from "react-redux";

export default function MyCoursesAlumn() {
  const user = useSelector((state) => state.userDetail);
  const courses = useSelector((state) => state.coursesBackUp);
  let myBuys = user.buys ? user.buys.map((buy) => buy.courseId) : [];
  let myCourses = courses.filter((course) => myBuys.includes(course.id));

  const userDetail = useSelector((state) => state.userDetail);

  console.log(myCourses, "myCourses");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Mis Cursos | Alumno |</h2>
      </div>
      <div className={styles.courses}>
        {myCourses &&
          myCourses.map((e) => {
            return (
              <CardMini
                key={e.id}
                name={e.name}
                img={e.image}
                id={e.id}
              />
            );
          })}
      </div>
    </div>
  );
}
