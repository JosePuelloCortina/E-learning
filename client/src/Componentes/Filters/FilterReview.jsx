import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCourseReview } from "../../redux/actions";

function FilterReview({ setOrderReview }) {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(filterCourseReview(direction));
    setOrderReview(direction);
  }

  return (
    <div>
      <label>Calificacion</label>
      <select onChange={(e) => handleOnChange(e)}>
        <option value="All">Todos</option>
        <option value="review_desc">Mayor a menor</option>
        <option value="review_asc">Menor a mayor</option>
      </select>
    </div>
  );
}

export default FilterReview;
