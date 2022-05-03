import React, { useState } from "react";
import styles from './Carousel.module.css'
import { useSelector } from "react-redux";

export default  function Carousel() {

const courses = useSelector((state) => state.courses);

const coursesFeatured = courses.filter(e => e.review === 5 || e.review === 4 );

  const coursesOrder = coursesFeatured.sort((a, b) => {
    if (a.review < b.review ) {
      return 1
    }
    if (a.attack > b.attack) {
      return -1;
    }
    return 0
  })



    return (

         <div >

         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"  >
         <div class="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div class="carousel-inner" id={styles.altura}>
           <div class="carousel-item active">
             <img src={coursesFeatured[0].image} class="d-block w-100" alt="..."/>
             <div class="carousel-caption d-none d-md-block" id={styles.fondo}>
               <h5>{coursesFeatured[0].name}</h5>

           { coursesFeatured[0].review === 3 ? (
              <p>⭐⭐⭐</p>
            ) : coursesFeatured[0].review === 4 ? (
              <p>⭐⭐⭐⭐</p>
            ) : (
              <p>⭐⭐⭐⭐⭐</p>
            )}
               <p>{coursesFeatured[0].description}</p>
             </div>
           </div>
           <div class="carousel-item">
             <img src={coursesFeatured[1].image} class="d-block w-100" alt="..."/>
             <div class="carousel-caption d-none d-md-block" id={styles.fondo}>
               <h5>{coursesFeatured[1].name}</h5>

            { coursesFeatured[1].review === 3 ? (
              <p>⭐⭐⭐</p>
            ) : coursesFeatured[1].review === 4 ? (
              <p>⭐⭐⭐⭐</p>
            ) : (
              <p>⭐⭐⭐⭐⭐</p>
            )}
               <p>{coursesFeatured[0].description}</p>
             </div>
           </div>
           <div class="carousel-item">
             <img src={coursesFeatured[2].image}class="d-block w-100" alt="..."/>
             <div class="carousel-caption d-none d-md-block" id={styles.fondo}>
               <h5>{coursesFeatured[2].name}</h5>
           
            { coursesFeatured[2].review === 3 ? (
              <p>⭐⭐⭐</p>
            ) : coursesFeatured[2].review === 4 ? (
              <p>⭐⭐⭐⭐</p>
            ) : (
              <p>⭐⭐⭐⭐⭐</p>
            )}
              <p>{coursesFeatured[2].description}</p>
             </div>
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
         </div>
    )
}

