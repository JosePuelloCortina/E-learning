import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  allCourses,
  getCoursesById,
  removeCourseDetail,
} from "../../redux/actions";
import styles from "./CourseCardDetail.module.css";

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
        <div>
          <h3>{detail.name}</h3>
          <h4>Instructor: {course[0].users[0].name}</h4>
          <h4>{detail.description}</h4>
          <h4>{detail.duration}</h4>
          <h4>{detail.progress}</h4>
          <h4>{detail.review}</h4>
          <h4>{detail.image}</h4>
          <h4>{detail.price}</h4>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}

export default CourseCardDetail;
