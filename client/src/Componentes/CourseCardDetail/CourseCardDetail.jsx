import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  allCourses,
  getCoursesById,
  removeCourseDetail,
} from "../../redux/actions";
import styles from "./CourseCardDetail.module.css";
import { Link } from "react-router-dom";

function CourseCardDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCoursesById(id));
    dispatch(allCourses());
    return () => {
      dispatch(removeCourseDetail());
    };
  }, []);

  const detail = useSelector((state) => state.courseDetail);
  const courses = useSelector((state) => state.courses);
  const course = courses.filter((element) => element.id === id);

  return (
    <div>
      {detail ? (
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={detail.image} alt="" />
            </div>
            <div className={styles.courseInfo}>
              <h3>{detail.name}</h3>
              <h4>Instructor: {course[0].users[0].name}</h4>
              <h4>{detail.description}</h4>
              <h4>{detail.duration}</h4>
              <h4>{detail.progress}</h4>
              <h4>{detail.review}</h4>
              <h4>{detail.price}</h4>
            </div>

            {detail.clases &&
              detail.clases.map((e) => {
                return (
                  <div className={styles.containerClases}>
                    <ul>
                      <li>{e.name}</li>
                      <li>{e.duration}</li>
                      <li>{e.description}</li>
                    </ul>
                  </div>
                );
              })}
            <Link to="/home">
              <button>Go to home</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}

export default CourseCardDetail;
