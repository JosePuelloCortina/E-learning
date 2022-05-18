import React from "react";
import styles from "./adminReviewsPage.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "./../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  deleteReview,
  filterByReported,
  allUser,
  searchReviewById,
  allCourses,
  filterReviewByCourse,
} from "../../redux/actions";

export default function AdminReviewsPage() {
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews);
  const allUsers = useSelector((state) => state.reviews);
  const allIds = allUsers.filter((e) => e.id);
  const courses = useSelector((state) => state.courses);

  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(10);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentReviews = allReviews.slice(firstCourseIndex, lastCourseIndex);

  const [currentUser, setCurrentUser] = useState(0);

  console.log(allReviews, "esto es all reviews");
  console.log(allIds, "esto es all ids");

  useEffect(() => dispatch(getAllReviews()), [dispatch]);
  useEffect(() => dispatch(allUser()), [dispatch]);
  useEffect(() => dispatch(allCourses()), [dispatch]);
  const [input, setInput] = useState("");

  function handleDelete(e) {
    e.preventDefault(e);
    if (window.confirm("¿Desea eliminar este comentario?") === true) {
      dispatch(deleteReview(e.target.name, e.target.value));
      alert("Comentario eliminado.");
      dispatch(getAllReviews());
    } else {
      alert("Cancelado.");
    }
  }

  function handleFilterReported(e) {
    e.preventDefault(e);
    dispatch(filterByReported(e.target.value));
  }
  function handleSearch(e) {
    e.preventDefault(e);
    dispatch(searchReviewById(input));
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleFilterCourse(e) {
    e.preventDefault(e);
    dispatch(filterReviewByCourse(e.target.value));
  }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Administrar Reseñas</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.top}>
            <h3>Filtrar por: </h3>
            <select onChange={handleFilterCourse}>
              <option value="all">Curso</option>
              {courses &&
                courses.map((e) => {
                  return <option value={e.name}>{e.name}</option>;
                })}
            </select>

            <select onChange={handleFilterReported}>
              <option value="all">Todos</option>
              <option value="reported">Reportados</option>
            </select>

            {/* <select>
                <option>ID Usuario</option>
            </select> */}
            <h3>Buscar por ID Usuario </h3>
            <input onChange={handleInputChange} value={input} />
            <button className={styles.buscar} onClick={handleSearch}>
              Buscar
            </button>
          </div>
          <div className={styles.bottom}>
            <table className={styles.table} border="1">
              <tbody>
                <tr>
                  <th width="15%">Nombre de Usuario</th>
                  <th width="25%">ID Usuario</th>
                  <th width="20%">Nombre del Curso</th>
                  <th width="25%">Comentario</th>
                  <th width="8%">Reportado</th>
                  <th width="7%">Acción</th>
                </tr>
                {currentReviews &&
                  currentReviews.map((e) => {
                    console.log(e, "esto es e");
                    return (
                      <tr>
                        <td width="15%">{e.userName}</td>
                        <td width="25%">{e.userId}</td>
                        <td width="20%">{e.course.name}</td>
                        <td width="25%">{e.coment}</td>
                        <td width="8%">{e.reported === true ? "Si" : "No"}</td>
                        <td width="7%">
                          <button name={e.id} value={e.courseId} onClick={handleDelete}>
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            coursesPerPage={coursesPerPage}
            lastCourseIndex={lastCourseIndex}
            allCourses={allReviews}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
