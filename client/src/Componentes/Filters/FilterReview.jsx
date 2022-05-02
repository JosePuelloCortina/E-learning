import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCourseReview } from "../../redux/actions";
import styles from "./FiltersIndex.module.css";


function FilterReview({ setOrderReview }) {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(filterCourseReview(direction));
    setOrderReview(direction);
  }

  return (
    <div className={styles.containerSelect}>
      <div className={styles.select}>
        <select className={styles.selecttodo} onChange={(e) => handleOnChange(e)}>
          <option value="All">Calificaciones</option>
          <option value="review_desc">Mayor a menor</option>
          <option value="review_asc">Menor a mayor</option>
        </select>
       
      </div>
    </div>
  );
}

export default FilterReview;
