import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";
import FilterReview from "./FilterReview";
import styles from "./FiltersIndex.module.css";

function FilterIndex({ setOrderReview }) {
  return (
    <div className={styles.containerFilters}>
      <div>{<FilterPrice />}</div>
      <div>{<FiltersCategory />}</div>
      <div>{<FilterReview setOrderReview={setOrderReview} />}</div>
    </div>
  );
}

export default FilterIndex;
