import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from "./courseLessons.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {
  getCoursesById,
  removeCourseDetail,
  getAllClasses,
  allUser,
  createReview,
} from "../../redux/actions";
import LessonsList from "../LessonsList/LessonsList";
import LessonsVideo from "./../LessonsVideo/LessonsVideo";
import { Link, useNavigate } from "react-router-dom";

export default function CourseLessons() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const course = useSelector((state) => state.courseDetail);
  const loggedUserId = useSelector((state) => state.loggedUsers);
  const allUsers = useSelector((state) => state.user);
  const user = allUsers.find((e) => e.id === loggedUserId);

  const totalClasses = useSelector((state) => state.classes);
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.userDetail);

  const courseClasses = totalClasses.filter((c) => c.courseId === course.id);
  console.log(user, "esto es user");

  const [currentLesson, setCurrentLesson] = useState({});
  const [form, setForm] = useState(false);
  const [review, setReview] = useState({
    idCourse: id,
    score: "",
    coment: "",
    userName: user.name,
  });

  console.log(review);

  useEffect(() => {
    dispatch(getCoursesById(id));
    // return () => {
    // dispatch(removeCourseDetail());
    // };
  }, []);

  useEffect(() => dispatch(getAllClasses()), []);
  useEffect(() => dispatch(allUser()), []);

  function handleClose(e) {
    e.preventDefault(e);
    setForm(false);
  }

  function handleChange(e) {
    e.preventDefault(e);
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitCourse(e) {
    e.preventDefault(e);
    navigate(`/editCourse/${id}`);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (review.score && review.coment) {
      dispatch(createReview(review));
      alert("Calificación enviada.");
      setForm(false);
    } else {
      alert("Por favor seleccione un puntaje y deje su comentario.");
    }
  }
  function resetCurrentLesson() {
    setCurrentLesson({});
  }

  return (
    <div>
      <NavBar />

      <div className={form === false ? style.container : style.hiddenContainer}>
        <div className={style.body2}>
          <div className={style.title}>
            <h1 onClick={() => resetCurrentLesson()}>{course.name}</h1>
          </div>
        </div>

       
       
        <div className={style.body}>
          <div className={style.left}>
            <LessonsVideo
              lessons={courseClasses}
              currentLesson={currentLesson}
              course={course}
              user={user}
              // idCourse={id}
            />
          </div>
          <div className={style.right}>
            <LessonsList
              lessons={courseClasses}
              form={form}
              setForm={setForm}
              setCurrentLesson={setCurrentLesson}
              user={user}
            />
          </div>
        </div>
      </div>

      <Footer />
      <div>
        <main className={form ? style.visible : style.hidden}>
          <button className={style.close} onClick={handleClose}>
            Cerrar
          </button>
          <h4>Calificar el curso de {course.name}</h4>

          <label>¿Qué puntaje le das?</label>
          <div className={style.calif}>
            <div className={style.star}>
              <p>⭐</p>
              <input
                type="radio"
                name="score"
                value="1"
                onChange={handleChange}
              />
            </div>
            <div className={style.star}>
              <p>⭐⭐</p>
              <input
                type="radio"
                name="score"
                value="2"
                onChange={handleChange}
              />
            </div>
            <div className={style.star}>
              <p>⭐⭐⭐</p>
              <input
                type="radio"
                name="score"
                value="3"
                onChange={handleChange}
              />
            </div>
            <div className={style.star}>
              <p>⭐⭐⭐⭐</p>
              <input
                type="radio"
                name="score"
                value="4"
                onChange={handleChange}
              />
            </div>
            <div className={style.star}>
              <p>⭐⭐⭐⭐⭐</p>
              <input
                type="radio"
                name="score"
                value="5"
                onChange={handleChange}
              />
            </div>
            <br />
            <br />
          </div>
          <label>Contanos tu experiencia</label>
          <textarea
            placeholder="Escribe tu comentario.."
            name="coment"
            value={review.coment}
            onChange={handleChange}
          />
          <button className={style.send} onClick={handleSubmit}>
            Enviar
          </button>
        </main>
      </div>
    </div>
  );
}
