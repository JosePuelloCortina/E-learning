import React from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";
import FilterReview from "./FilterReview";

function FilterIndex() {
  return (
    <div>
      <div>{<FilterPrice />}</div>
      <div>{<FiltersCategory />}</div>
      <div>{<FilterReview />}</div>
    </div>
  );
}

export default FilterIndex;
