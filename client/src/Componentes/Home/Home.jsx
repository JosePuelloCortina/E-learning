import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { allCourses } from "../../redux/actions";
import CoursesContainer from "../CoursesContainer/CoursesContainer";
import Pagination from "../Pagination/Pagination";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import FilterIndex from "../Filters/FilterIndex";

export default function Home() {
  const dispatch = useDispatch();

  async function getCourses() {
    await dispatch(allCourses());
  }

  useEffect(() => {
    getCourses();
  }, []);

  const courses = useSelector((state) => state.courses);
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(8);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourses = courses.slice(firstCourseIndex, lastCourseIndex);

  return (
    <div className={styles.home}>
      <NavBar />
      <FilterIndex/>
      <CoursesContainer currentCourses={currentCourses} />
      <Pagination
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        lastCourseIndex={lastCourseIndex}
        allCourses={courses}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
