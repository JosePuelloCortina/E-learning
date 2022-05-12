import React, { useState, useEffect } from "react";
import { createCategory, allCategories, removeCategory } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from './AdminPage.module.css'
import NavBar from "../NavBar/NavBar";

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
    <div>
      <NavBar />
      <h1 className={styles.titulocategoria}>Administar Categorias</h1>
      <table className={styles.table} border="1">
        <tbody>
          <tr>
            <th width="10%">Categorias</th>
            <th width="10%">Eliminar Categorias</th>
          </tr>
      <div>
        <div>
            {categories.map((category) => {
              return (
                <li key={category.name} value={category.name}>
                  {category.name}
                  <button value={category.id} onClick={(e) => handleRemove(e)}>
                    Eliminar
                  </button>
                </li>
              );
            })}
        </div>
      </div>
        </tbody>
      </table>
          <div>
            <div>
              <input
                type="text"
                value={input}
                name="name"
                onChange={(e) => handleChange(e)}
              ></input>
              <button onClick={(e) => handleSubmit(e)} type="submit">
                Añadir categoria
              </button>
            </div>
          </div>
    </div>
  );
  
}
export default AgregarCategorias;
