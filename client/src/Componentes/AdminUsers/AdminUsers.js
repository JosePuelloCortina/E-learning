import React from "react";
import { Link } from "react-router-dom";
import styles from "./adminUsers.module.css";

export default function AdminUsers() {
  return (
    <Link to="/AdminUsers">
      <div className={styles.container}>
        <div className={styles.title}>
          {" "}
          <h2>Administrar Usuarios</h2>{" "}
        </div>
        <div className={styles.body}>Editar, bloquear y eliminar usuarios.</div>
      </div>
    </Link>
  );
}
