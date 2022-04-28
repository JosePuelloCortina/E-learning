import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../redux/actions";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CoursesContainer.module.css";

export default function CoursesContainer({ currentCourses }) {
  return (
    <div className={styles.container}>
      {currentCourses?.map((e) => (
        <CourseCard key={e.id} name={e.name} img={e.img} id={e.id} />
      ))}
    </div>
  );
}
