import React from "react";
import styles from "./NavBarcopy.module.css";
import FilterIndex from "../Filters/FilterIndex";

import SearchCourse from "../Search/SearchCourse";


export default function NavBarCopy({setOrderReview, setCurrentPage}) {
  

        return (
    <div className={styles.navBar} >
      
      <SearchCourse />
      <FilterIndex setOrderReview={setOrderReview} setCurrentPage={setCurrentPage} />
      
      </div>
  
  );
}
