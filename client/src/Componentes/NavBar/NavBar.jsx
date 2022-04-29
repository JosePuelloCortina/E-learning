import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchCourse from "../Search/SearchCourse";

export default function Home() {

        return (
    <div className={styles.navBar}>
      <Link className={styles.linkHome} to="/home">
        <h1>Logo</h1>
      </Link>
      <SearchCourse />
      
      <Link to="/user">
        <button>Ingresar</button>{" "}
      </Link>
    </div>
  
  );
}
