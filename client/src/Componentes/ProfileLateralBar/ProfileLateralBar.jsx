import React from "react";

import styles from "./profileLateralBar.module.css";
import { Link } from "react-router-dom";
import img from "../../Images/avatar4.jpg";
import { useSelector } from "react-redux";

export default function ProfileLateralBar({
  name,
  email,
  id,
  categories,
  image,
}) {
  const user = useSelector((state) => state.userDetail);
  const userRole = user.roles ? user.roles[0].tipo : "";
  return (
    <div className={styles.container}>
      <h3>{name}</h3>

      <img src={image ? image : img} alt="avatar" />

      <h4>{email}</h4>
      <Link to={"/profile/edit/" + id}>
        <button className={styles.editButton}>Editar mis datos</button>
      </Link>

      {userRole === "alumno" && <h3>Intereses</h3>}
      {userRole === "alumno" &&
        categories &&
        categories.map((category) => {
          return (
            <div>
              <div key={category.name} className={styles.categories}>
                <h5>{category.name}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}
