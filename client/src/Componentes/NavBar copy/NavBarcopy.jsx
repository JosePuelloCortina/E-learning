import React from "react";
import styles from "./NavBar.module.css";
import FilterIndex from "../Filters/FilterIndex";

import SearchCourse from "../Search/SearchCourse";


export default function NavBarCopy() {
  

        return (
    <div className={styles.navBar}>
      
      <SearchCourse />
      <FilterIndex />
      
      </div>
  
  );
}
