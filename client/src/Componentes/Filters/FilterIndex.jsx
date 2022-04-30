import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";
import FilterReview from "./FilterReview";

function FilterIndex({ setOrderReview }) {
  return (
    <div>
      <div>{<FilterPrice />}</div>
      <div>{<FiltersCategory />}</div>
      <div>{<FilterReview setOrderReview={setOrderReview} />}</div>
    </div>
  );
}

export default FilterIndex;
