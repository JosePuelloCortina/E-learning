import React from "react";
import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";

export default function CourseCard({
  name,
  image,
  id,
  review,
  categories,
  price,
}) {
  return (
    <Link className={styles.linkDetail} to={`/courses/id/${id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            <p>
              <strong>{name}</strong>
            </p>
            {categories &&
              categories.map((elem, i) => {
                return (
                  <div key={i}>
                    <p>{elem.name}</p>
                  </div>
                );
              })}
          </div>
          <div>
            {review >= 0 && review < 1 ? (
              <p>Este curso no tiene calificacion</p>
            ) : review >= 1 && review < 2 ? (
              <p>⭐</p>
            ) : review >= 2 && review < 3 ? (
              <p>⭐⭐</p>
            ) : review >= 3 && review < 4 ? (
              <p>⭐⭐⭐</p>
            ) : review >= 4 && review < 5 ? (
              <p>⭐⭐⭐⭐</p>
            ) : (
              <p>⭐⭐⭐⭐⭐</p>
            )}
            <p>
              <strong>${price}</strong>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
