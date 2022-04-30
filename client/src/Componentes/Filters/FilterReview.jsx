import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCourseReview } from "../../redux/actions";

function FilterReview() {
  const dispatch = useDispatch();

  const [orderReview, setOrderReview] = useState("");

  useEffect(() => {
    handleFilteredReview();
  }, [orderReview]);

  function handleOnChange(e) {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    setOrderReview(direction);
  }

  function handleFilteredReview() {
    console.log(orderReview);
    dispatch(filterCourseReview(orderReview));
  }

  return (
    <div>
      <label>Calificacion</label>
      <select onChange={(e) => handleOnChange(e)}>
        <option value="All">Todos</option>
        <option value="review_asc">ascendente</option>
        <option value="review_desc">descendente</option>
      </select>
    </div>
  );
}

export default FilterReview;
