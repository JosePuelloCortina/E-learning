import React from 'react';
import { useDispatch } from "react-redux";
import { filterCourseReview } from "../../redux/actions";

function FilterReview() {
    const dispatch = useDispatch(); 

    function handleFilteredReview(e){
        e.preventDefault();
        dispatch(filterCourseReview(e.target.value));
    }
    return (
        <div>
            <label>Calificacion</label>
            <select onChange={e => handleFilteredReview(e)}>
                <option value='All'>Todos</option>
                <option value={1}>⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={5}>⭐⭐⭐⭐⭐</option>
            </select>
            
        </div>
    );
}

export default FilterReview;

