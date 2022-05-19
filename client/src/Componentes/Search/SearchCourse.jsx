import React from "react";
// import styles from "../NavBar/NavBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { allCourses, courseSearch } from "../../redux/actions/index";
import styles from "./SearchCourse.module.css";

function SearchCourse({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmitCourse(e) {
    e.preventDefault();
    dispatch(courseSearch(name));
    setCurrentPage(1);
    // setName("");
  }

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(allCourses());
    setName("");
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar ..."
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      {name.length > 0 && (
        <button
          className={styles.resetButton}
          //   style={{ background: "silver", color: "black" }}
          onClick={(e) => handleReset(e)}
        >
          X
        </button>
      )}

      <button type="submit" onClick={handleSubmitCourse}>
        Buscar{" "}
      </button>
    </div>
  );
}

export default SearchCourse;
