import React from 'react'
import { filters } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";


function Filters({setOrder, currentPage, setCurrentPage}){


  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses);
  const filtersCourses = useSelector((state) => state.filtersCourses);
 
  function handleOnfilter(event) {
    dispatch(filters(event.target.value))
    setOrder(event.target.value)
    setCurrentPage(1)
   
  }
    
  
  return (

    <Select>
    <SelectFiltros defaultValue='Tipos' onChange={(e) => handleOnfilter(e)}>
      <option disabled value='Tipos'>Types</option>
      <option value='all'>All</option>

      {type.map(e => (
        <option key={e.id} value={e.name}>{e.name}</option>
      ))}
    </SelectFiltros>
    <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />

  </Select>
  )
      
}
export default Filters