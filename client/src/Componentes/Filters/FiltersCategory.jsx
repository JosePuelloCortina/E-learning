import React from "react";
import { filterCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  function handleOnfilter(e) {
    e.preventDefault();
    dispatch(filterCategory(e.target.value));
  }

  const filteredCategories = [];

  const categoriesNames = categories.map((a) => a.name);

  for (let i = 0; i < categoriesNames.length; i++) {
    if (filteredCategories.indexOf(categoriesNames[i]) === -1) {
      filteredCategories.push(categoriesNames[i]);
    }
  }

  return (
    <div>
      <div>
        <label>Categoria</label>
        <select onChange={(e) => handleOnfilter(e)}>
          <option>Seleccionar</option>
          <option value="all">All</option>
          {filteredCategories.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default Filters;
