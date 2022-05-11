import React, { useEffect, useState } from "react";
import { filterCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from './AdminPage.module.css'

function FiltersCategory({setCurrentPage}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [category, setCategory] = useState([]);

  function handleRemoveCategory(e) {
      setCategory(category.filter(cat => cat !== e.target.value));
  }

  return (
    <div className={styles.containertotal}>
      <div className={styles.containerSelect}>
        {/* <label>Categoria</label> */}
        <div className={styles.select}>
        <ul className={styles.selecttodo} >
          <h1 className={styles.h2}>Categorias</h1>
          {categories.map((category) => { 
            return (
              <li key={category.name} value={category.name}>
                {category.name}
                <input type="checkbox" />
              </li>
          
            );
          })}
        </ul>
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
