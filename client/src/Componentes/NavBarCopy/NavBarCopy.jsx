import React from "react";
import styles from "./NavBar.module.css";
import FilterIndex from "../Filters/FilterIndex";

import SearchCourse from "../Search/SearchCourse";


export default function NavBarCopy({setOrderReview}) {
  

        return (
    <div className={styles.navBar}>
      
      <SearchCourse />
      <FilterIndex setOrderReview={setOrderReview}  />
      
      </div>
  
  );
}
