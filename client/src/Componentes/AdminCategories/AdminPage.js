import React, { useState, useEffect } from "react";
import { createCategory, allCategories, removeCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from './AdminPage.module.css'

function AgregarCategorias() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [input, setInput] = useState("")

function handleRemove(e){
  e.preventDefault();
  dispatch(removeCategory(e.target.value))
  alert("Categoría eliminada correctamente")
  dispatch(allCategories())
}

 function handleSubmit(e){
    e.preventDefault();   
    dispatch(createCategory(input))
    alert("Categoría creada exitosamente")
    
    setInput("")
    dispatch(allCategories())
  }  
    
    function handleChange(e){
      setInput(e.target.value)
      console.log(input)
      
  
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
                <button value={category.id} onClick={(e) =>handleRemove(e)}>X</button>
              </li>
            );
          })}
        </ul>
        <div className={styles.containertotal}>  
      <div>
      <input 
      type="text" value= {input} name="name"
      onChange={(e) =>handleChange(e)}></input>
      <button onClick={(e) =>handleSubmit(e)}type="submit">Añadir categoria</button>
     
        </div>             
      </div>
        </div>
      </div>     
    </div>
  );
  
}
export default AgregarCategorias;
