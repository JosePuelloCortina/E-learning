import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allUser,
  deleteUser,
  filterByBlocked,
  searchUser,
} from "../../redux/actions";
import styles from "../AdminUsers/AdminUsersPage.module.css";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import EditUserInfo from "./EditUserInfo/EditUserInfo";

function AdminUsersPage() {
  const users = useSelector((state) => state.filteredUsers);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(10);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentUsers = users.slice(firstCourseIndex, lastCourseIndex);

  const [currentUser, setCurrentUser] = useState(0);

  const [editInfo, setEditInfo] = useState(false);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(allUser());
  }, []);

  const toggleEditInfo = () => {
    setEditInfo(!editInfo);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    console.log("id es ", id);
    toggleEditInfo();
    setCurrentUser(id);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    if (
      window.confirm("¿Esta seguro que quiere eliminar este usuario?") === true
    ) {
      dispatch(deleteUser(id));
      alert("Usuario eliminado correctamente.");
      window.location.reload();
    }
  };

  function handleSearch(e) {
    e.preventDefault(e);
    dispatch(searchUser(input));
  }

  function handleFilterBlocked(e) {
    e.preventDefault();
    dispatch(filterByBlocked(e.target.value));
  }
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <NavBar />
      {editInfo && (
        <EditUserInfo
          editInfo={editInfo}
          setEditInfo={setEditInfo}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      <div className={styles.container}>
        <div className={styles.usersContainer}>
          <div className={styles.filtersContainer}>
            <div>
              <input
                onChange={handleInputChange}
                value={input}
                placeholder="Buscar por id..."
              />
              <button
                className={styles.buscar}
                onClick={(e) => handleSearch(e)}
              >
                Buscar
              </button>
            </div>
            <select onChange={(e) => handleFilterBlocked(e)}>
              <option selected disabled>
                Filtrar usuarios
              </option>
              <option value="all">Todos</option>
              <option value="true">Bloqueados</option>
            </select>
          </div>
          <div className={styles.bottom}>
            <table className={styles.usersTable}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Verificado</th>
                  <th>Bloqueado</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers &&
                  currentUsers.map((u, i) => {
                    return (
                      <tr
                        style={
                          u.banned === "true"
                            ? { color: "red" }
                            : { color: "black" }
                        }
                        className={styles.containerInfo}
                      >
                        <td className={styles.id}>{u.id}</td>
                        <td className={styles.name}>{u.name}</td>
                        <td className={styles.email}>{u.email}</td>
                        <td className={styles.rol}>{u.roles[0].tipo}</td>
                        <td className={styles.validated}>{u.validated}</td>
                        <td className={styles.banned}>{u.banned}</td>
                        <td className={styles.actions}>
                          <button
                            onClick={(e) => handleEdit(e, u.id)}
                            className={styles.editBtn}
                          >
                            Editar
                          </button>
                          {u.roles[0].tipo !== "admin" && (
                            <button
                              onClick={(e) => handleDelete(e, u.id)}
                              className={styles.deleteBtn}
                            >
                              Eliminar
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className={styles.adminPagUsers}>
            <Pagination
              currentPage={currentPage}
              coursesPerPage={coursesPerPage}
              lastCourseIndex={lastCourseIndex}
              allCourses={users}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminUsersPage;
