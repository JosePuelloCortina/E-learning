import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../redux/actions";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CoursesContainer.module.css";

export default function CoursesContainer({ currentCourses }) {
  return (
    <div className={styles.container}>
      {currentCourses.length === 0 ? (
        <h1>Curso no encontrado</h1>
      ) : (
        currentCourses?.map((e) => (
          <CourseCard
            key={e.id}
            name={e.name}
            image={e.image}
            id={e.id}
            review={e.review}
            categories={e.categories}
            price={e.price}
          />
        ))
      )}
    </div>
  );
}
