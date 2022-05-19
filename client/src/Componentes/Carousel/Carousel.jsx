import React from "react";
import styles from "./Carousel.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Carousel() {
  const courses = useSelector((state) => state.coursesBackUp);

  const coursesFeatured = courses.filter(
    (e) => e.review === 5 || e.review === 4
  );

  const coursesOrder = coursesFeatured.sort((a, b) => {
    if (a.review < b.review) {
      return 1;
    }
    if (a.review > b.review) {
      return -1;
    }
    return 0;
  });

  return (
    <div className={styles.container}>
      {coursesOrder.length > 0 && (
        <div className={styles.containerAll}>
          <div className={styles.slide}>
            <div className={styles.itemslide}>
              <img src={coursesOrder[0] && coursesOrder[0].image} />

              <Link to={`/courses/id/${coursesOrder[0].id}`}>
                <div className={styles.contDescription}>
                  <h2 className={styles.name}>
                    {coursesOrder[0] && coursesOrder[0].name}
                  </h2>
                  <p className={styles.description}>
                    {coursesOrder[0] && coursesOrder[0].description}
                  </p>
                  {coursesOrder[0] && coursesOrder[0].review === 3 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐</p>
                  ) : coursesOrder[0] && coursesOrder[0].review === 4 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐</p>
                  ) : (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐⭐</p>
                  )}
                </div>
              </Link>
            </div>

            <div className={styles.itemslide}>
              <img
                src={
                  coursesOrder[1] && coursesOrder[0] && coursesOrder[1].image
                }
              />

              <Link to={`/courses/id/${coursesOrder[1] && coursesOrder[1].id}`}>
                <div className={styles.contDescription}>
                  <h2 className={styles.name}>
                    {coursesOrder[1] && coursesOrder[1].name}
                  </h2>
                  <p className={styles.description}>
                    {coursesOrder[1] && coursesOrder[1].description}
                  </p>
                  {coursesOrder[1] && coursesOrder[1].review === 3 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐</p>
                  ) : coursesOrder[1] && coursesOrder[1].review === 4 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐</p>
                  ) : (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐⭐</p>
                  )}
                </div>
              </Link>
            </div>

            <div className={styles.itemslide}>
              <img src={coursesOrder[2] && coursesOrder[2].image} />

              <Link to={`/courses/id/${coursesOrder[2] && coursesOrder[2].id}`}>
                <div className={styles.contDescription}>
                  <h2 className={styles.name}>
                    {coursesOrder[2] && coursesOrder[2].name}
                  </h2>
                  <p className={styles.description}>
                    {coursesOrder[2] && coursesOrder[2].description}
                  </p>
                  {coursesOrder[2] && coursesOrder[2].review === 3 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐</p>
                  ) : coursesOrder[2] && coursesOrder[2].review === 4 ? (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐</p>
                  ) : (
                    <p className={styles.puntuacion}>Puntuacion: ⭐⭐⭐⭐⭐</p>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
