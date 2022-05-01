import React from "react";
import styles from "./Error404.module.css";
import { Link  } from "react-router-dom";

function Error404() {
  return (
    <div className={styles.container}>
      <img
        src="https://i.pinimg.com/564x/65/de/45/65de45e249f032dc9b07c96342fc1031.jpg"
        alt="error 404"
      />

<Link to="/home">
        <button class={styles.buttonYellow}>Volver</button>
      </Link>
    </div>
  );
}

export default Error404;
