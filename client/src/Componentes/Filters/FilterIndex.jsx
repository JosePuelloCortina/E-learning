import React from "react";
import FilterPrice from "./FilterPrice";
import FiltersCategory from "./FiltersCategory";

function FilterIndex() {
  return (
    <div>
      <div>{<FilterPrice />}</div>
      <div>{<FiltersCategory />}</div>
    </div>
  );
}

export default FilterIndex;
