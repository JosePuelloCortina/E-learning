import React from "react";
import styles from "../Nosotros/Nosotros.module.css"
import Quienes from "./Quienes";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
export default function Nosotros(){
return(
  
    
    <div >  
    <NavBar />
    <div className={styles.container}>
    <div className={styles.title}>
        <h1>Sobre nosotros</h1>
    </div>
     <div className={styles.body}>
    <div className={styles.cards}>
     <div className= {styles.card}>
    <h1 >¿Quiénes somos?</h1>
    <p>Somos un grupo de desarrolladores que creen en la Educación como herramienta de movilidad y asenso social, como instrumento de impacto en la vida de los estudiantes. Es por esto que en AkademIT concebimos la educación como un proceso en el que se construye activamente con el alumno, en donde el estudiante es protagonista, y no testigo de este proceso, estando en el centro y no por fuera del aprendizaje para así poder modificar su realidad.</p>
    </div>
    <div className= {styles.card}>
     <h1>¿Qué hacemos?</h1>
    <p> En AkademIT ofrecemos cursos de distintos temas relacionados con el mundo It siendo conscientes que es hacía allí </p>
    </div>
    <div className= {styles.card}>
     <h1>¿Qué hacemos?</h1>
    <p> En AkademIT ofrecemos cursos de distintos temas relacionados con el mundo It siendo conscientes que es realmente necesario</p>
    </div>
    </div>
         <div className={styles.img}>
<img alt="" src="https://www.xplora.eu/wp-content/uploads/como-escribir-web-sobre-nosotros.jpg"/> 
         </div>
         
     </div>
    
    <div>
LinkedIns
    </div>
    </div>
    <Footer/>
    </div>
    

)
};