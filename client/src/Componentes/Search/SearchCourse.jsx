import React from 'react';
// import styles from "../NavBar/NavBar.module.css";
import {useState} from "react";
import { useDispatch } from "react-redux";
import {courseSearch} from "../../redux/actions/index"

function SearchCourse() {
    const dispatch = useDispatch()
    const[name, setName] = useState ("")

    function handleInputChange(e){
e.preventDefault()
setName(e.target.value)
    }

    function handleSubmitCourse(e){
        e.preventDefault()
        dispatch(courseSearch(name))
        setName("")
    } 

    function handleKeyPress(e){
        dispatch(courseSearch(name))
    }
    return (
        <div>
            <input type = "text" 
            placeholder="Buscar ..." 
            value = {name} 
            onChange={(e) =>handleInputChange(e)}
            onKeyDown={(e) => handleKeyPress(e)}
            />
            <button type="submit" onClick={handleSubmitCourse}>Search </button>
      
        </div>
    );
}

export default SearchCourse;