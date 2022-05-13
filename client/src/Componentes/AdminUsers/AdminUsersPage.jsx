import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUser, deleteUser } from "../../redux/actions";
import styles from "../AdminUsers/AdminUsersPage.module.css";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";
import EditUserInfo from "./EditUserInfo/EditUserInfo";
import { useNavigate } from "react-router";

function AdminUsersPage() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(15);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentUsers = users.slice(firstCourseIndex, lastCourseIndex);

  const [currentUser, setCurrentUser] = useState(0);

  const [editInfo, setEditInfo] = useState(false);

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

  return (
    <div className={styles.container}>
      {editInfo && (
        <EditUserInfo
          editInfo={editInfo}
          setEditInfo={setEditInfo}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      <div className={styles.usersContainer}>
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
