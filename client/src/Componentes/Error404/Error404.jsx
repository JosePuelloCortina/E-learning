import React from "react";
import styles from "./Error404.module.css";

function Error404() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img404}
        src="https://i.pinimg.com/564x/65/de/45/65de45e249f032dc9b07c96342fc1031.jpg"
        alt="error 404"
      />
    </div>
  );
}

export default Error404;
