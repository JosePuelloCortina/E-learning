import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";
import FilterReview from "./FilterReview";

function FilterIndex({ setOrderReview, setCurrentPage }) {
  return (
    <div>
      <div>{<FilterPrice />}</div>
      <div>{<FiltersCategory setCurrentPage={setCurrentPage} />}</div>
      <div>{<FilterReview setOrderReview={setOrderReview}  />}</div>
    </div>
  );
}

export default FilterIndex;
