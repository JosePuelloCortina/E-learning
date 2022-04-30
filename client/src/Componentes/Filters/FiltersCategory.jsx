import React, { useEffect, useState } from "react";
import { filterCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function FiltersCategory({setCurrentPage}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    dispatch(filterCategory(category));
  }, [dispatch, category]);

  function handleAddCategory(e) {
    if(e.target.value !== "Seleccionar" && !category.includes(e.target.value)){
      setCategory([...category, e.target.value]);
      setCurrentPage(1);
    }
  }

  function handleRemoveCategory(e) {
      setCategory(category.filter(cat => cat !== e.target.value));
  }

  return (
    <div>
      <div>
        <label>Categoria</label>
        <select onChange={(e) => handleAddCategory(e)}>
          <option>Seleccionar</option>
          {categories.map((category) => {
            return (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
         {category.map((cat) => {
          return (
            <div key={cat}>
              <label>{cat}</label>
              <button onClick={(e) => handleRemoveCategory(e)} value={cat}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FiltersCategory;
