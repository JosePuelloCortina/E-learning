import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";
import FilterReview from "./FilterReview";
import styles from "./FiltersIndex.module.css";

function FilterIndex({ setOrderReview, setCurrentPage }) {
  return (
    <div className={styles.containerFilters}>
      <div>{<FilterPrice />}</div>
      <div>{<FilterReview setOrderReview={setOrderReview}  />}</div>
      <div>{<FiltersCategory setCurrentPage={setCurrentPage} />}</div>
    </div>
  );
}

export default FilterIndex;
