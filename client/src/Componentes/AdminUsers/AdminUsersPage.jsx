import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUser, deleteUser } from "../../redux/actions";
import styles from "../AdminUsers/AdminUsersPage.module.css";
import Pagination from "../Pagination/Pagination";

function AdminUsersPage() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(15);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentUsers = users.slice(firstCourseIndex, lastCourseIndex);

  useEffect(() => {
    dispatch(allUser());
  }, []);

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

  return (
    <div className={styles.container}>
      <div className={styles.usersContainer}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Verificado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers &&
              currentUsers.map((u, i) => {
                return (
                  <tr className={styles.containerInfo}>
                    <td className={styles.id}>{i + 1}</td>
                    <td className={styles.name}>{u.name}</td>
                    <td className={styles.email}>{u.email}</td>
                    <td className={styles.rol}>{u.roles[0].tipo}</td>
                    <td className={styles.validated}>{u.validated}</td>
                    <td className={styles.actions}>
                      <button>Editar</button>
                      <button>Banear</button>
                      <button onClick={(e) => handleDelete(e, u.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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
  );
}

export default AdminUsersPage;
