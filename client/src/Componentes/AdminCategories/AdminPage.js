import React, { useState } from "react";
import {
  createCategory,
  allCategories,
  removeCategory,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminPage.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";

function AgregarCategorias() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [input, setInput] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(15);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCategories = categories.slice(firstCourseIndex, lastCourseIndex);

  function handleRemove(e) {
    e.preventDefault();
    dispatch(removeCategory(e.target.value));
    alert("Categoría eliminada correctamente");
    dispatch(allCategories());
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createCategory(input));
    alert("Categoría creada exitosamente");

    setInput("");
    dispatch(allCategories());
  }

  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }
  return (
    <div>
      <NavBar />
      <h1 className={styles.titulocategoria}>Administar Categorias</h1>
      <div className={styles.containertotal}>
        <div className={styles.contenedor}>
          <table className={styles.table} border="5">
            <tbody>
              <tr>
                <th width="80%">Categorias</th>
                <th width="20%">Acción</th>
              </tr>
              {currentCategories.map((category) => {
                return (
                  <tr width="80%">
                    <td key={category.name} value={category.name}>
                      {category.name}
                    </td>
                    <td width="20%" className={styles.actions}>
                      <button
                        value={category.id}
                        onClick={(e) => handleRemove(e)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              coursesPerPage={coursesPerPage}
              lastCourseIndex={lastCourseIndex}
              allCourses={categories}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className={styles.conteinerañadir}>
          <div className={styles.contenedorañadir}>
            <div>
              <h1 className={styles.titleañadir}>Añadir Categorías</h1>
              <input
                className={styles.input}
                type="text"
                value={input}
                name="name"
                placeholder="   Añade una categoría..."
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className={styles.divañadir}>
              <button
                className={styles.buttonañadir}
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AgregarCategorias;
