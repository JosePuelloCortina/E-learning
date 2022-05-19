import React, { useEffect, useState } from "react";
import {
  allCourses,
  getCoursesById,
  removeClassDetail,
  removeCourseDetail,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./adminPageCourses.module.css";
import RevisionCourse from "./RevisionCourse";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

function AdminPageCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.coursesBackUp);
  const coursesApro = courses.filter((c) => c.state === "passed");

  const [currentCourse, setcurrentCourse] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(8);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourses = coursesApro.slice(firstCourseIndex, lastCourseIndex);

  const handleCargaCourse = (e) => {
    setcurrentCourse(courses.find((curs) => curs.id === e.target.value));
    dispatch(getCoursesById(e.target.value));
    dispatch(removeClassDetail());
  };

  useEffect(() => {
    dispatch(removeCourseDetail());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCourses());
  }, [dispatch]);

  return (
    <div className={styles.containertotal}>
      <NavBar />

      <div className={styles.containerSelect}>
        <div className={styles.containerCourse}>
          <h1 className={styles.h2}>Cursos a Revisar</h1>
          {courses.map((curs) => {
            if (curs.state === "inprocess") {
              return (
                <div className={styles.map}>
                  <p key={curs.name} value={curs.name}>
                    {curs.name}
                  </p>
                  <div>
                    <button
                      onClick={(e) => handleCargaCourse(e)}
                      value={curs.id}
                    >
                      Carga
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className={styles.containerCourse}>
          <h1 className={styles.h2}>Cursos Deshabilitado</h1>
          {courses.map((curs) => {
            if (curs.state === "reject") {
              return (
                <div className={styles.map}>
                  <p key={curs.name} value={curs.name}>
                    {curs.name}
                  </p>
                  <div>
                    <button
                      onClick={(e) => handleCargaCourse(e)}
                      value={curs.id}
                    >
                      Carga
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className={styles.containerCourse}>
          <h1 className={styles.h2}>Cursos Aprobados</h1>
          {currentCourses.map((curs) => {
            if (curs.state === "passed") {
              return (
                <div className={styles.map}>
                  <p key={curs.name} value={curs.name}>
                    {curs.name}
                  </p>
                  <div>
                    <button
                      onClick={(e) => handleCargaCourse(e)}
                      value={curs.id}
                    >
                      Carga
                    </button>
                  </div>
                </div>
              );
            }
          })}
          <Pagination
            currentPage={currentPage}
            coursesPerPage={coursesPerPage}
            lastCourseIndex={lastCourseIndex}
            allCourses={coursesApro}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      <RevisionCourse
        currentCourse={currentCourse}
        setCurrentCourse={setcurrentCourse}
      />
    </div>
  );
}

export default AdminPageCourses;
