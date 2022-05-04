import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import NavBarCopy from "../NavBar copy/NavBarcopy";
import Footer from "../Footer/Footer";
import { allCategories, allCourses } from "../../redux/actions";
import CoursesContainer from "../CoursesContainer/CoursesContainer";
import Pagination from "../Pagination/Pagination";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  // async function getCourses() {
  //   await dispatch(allCourses());
  // }

  // async function getCategories() {
  //   await dispatch(allCategories());
  // }

  useEffect(() => {
    dispatch(allCourses());
    dispatch(allCategories());
  }, [dispatch]);

  const [orderReview, setOrderReview] = useState("");

  const courses = useSelector((state) => state.courses);
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(6);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourses = courses.slice(firstCourseIndex, lastCourseIndex);

  return (
    <div className={styles.home}>
      <NavBar />
      <NavBarCopy
        setOrderReview={setOrderReview}
        setCurrentPage={setCurrentPage}
      />
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
