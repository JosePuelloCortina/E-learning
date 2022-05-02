import React, { useEffect, useState } from "react";
import { filterCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FiltersIndex.module.css";

function FiltersCategory({setCurrentPage}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    dispatch(filterCategory(category));
  }, [dispatch, category]);

  function handleAddCategory(e) {
    if(e.target.value !== "Categoria" && !category.includes(e.target.value)){
      setCategory([...category, e.target.value]);
      setCurrentPage(1);
    }
  }

  function handleRemoveCategory(e) {
      setCategory(category.filter(cat => cat !== e.target.value));
  }

  return (
    <div>
      <div className={styles.containerSelect}>
        {/* <label>Categoria</label> */}
        <div className={styles.select}>
        <select className={styles.selecttodo} onChange={(e) => handleAddCategory(e)}>
          <option>Categoria</option>
          {categories.map((category) => {
            return (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
        </div>
      </div>
      <div className={styles.map}>
         {category.map((cat) => {
          return (
            <div className={styles.containerSelectMap} key={cat}>
              <label className={styles.select}  >{cat}</label>
              <button onClick={(e) => handleRemoveCategory(e)} value={cat}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FiltersCategory;
