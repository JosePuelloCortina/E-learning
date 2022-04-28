import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../redux/actions";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CoursesContainer.module.css";

export default function CoursesContainer({ currentCourses }) {
  // const dispatch = useDispatch()

  // async function getCourses() {
  //     await dispatch(allCourses())
  // }

  // useEffect(() => {
  //     getCourses()
  // }, [])

  // const courses = useSelector(state => state.courses)
  // console.log(courses)

  return (
    <div className={styles.container}>
      {currentCourses?.map((e) => (
        <CourseCard name={e.name} img={e.img} />
      ))}
    </div>
  );
}
