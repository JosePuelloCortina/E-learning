import React from "react";
import styles from "../Nosotros/Nosotros.module.css"
import Quienes from "./Quienes";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom'
import agus from "../../Images/nosotros/agusok.png"
import albano from "../../Images/nosotros/albanook.png"
import andrea from "../../Images/nosotros/andreaok.png"
import gustavo from "../../Images/nosotros/gustavook.png"
import jose from "../../Images/nosotros/joseok.png"
import tomas from "../../Images/nosotros/tomasok.png"
import valen from "../../Images/nosotros/valenok.png"




export default function Nosotros(){
return(
  
    
    <div >  
    <NavBar />
    <div className={styles.container}>
    <div className={styles.title}>
        <h1>Sobre Nosotros</h1>
    </div>
     <div className={styles.body}>
     <div className={styles.linkedin}>

     <a href="https://www.linkedin.com/in/agustin-agis/" target="_blank" rel="noopener noreferrer" className={styles.uno}>
        <img src={agus} alt='' />
        <p>Agustin</p>
        <p>Agis</p>
         </a>

         <a href="https://www.linkedin.com/in/albano-vignaduzzi/"  target="_blank" rel="noopener noreferrer" className={styles.uno}>
        <img src={albano} alt='' />
        <p>Albano</p>
        <p>Vignaduzzi</p>
         </a>
         <a href="https://www.linkedin.com/in/andreahubacek/"  target="_blank" rel="noopener noreferrer" className={styles.uno}>
        <img src={andrea} alt='' />
        <p>Andrea</p>
        <p>Hubacek</p>
         </a>
         <a href="https://www.linkedin.com/in/gustavo-alegre-6b378b59/"  target="_blank" rel="noopener noreferrer"  className={styles.uno}>
        <img src={gustavo} alt='' />
        <p>Gustavo</p>
        <p>Alegre</p>
         </a>
         <a href="https://www.linkedin.com/in/josepuello/"  target="_blank" rel="noopener noreferrer" className={styles.uno}>
        <img src={jose} alt='' />
        <p>Jose</p>
        <p>Puello</p>
         </a>
         <a href="https://www.linkedin.com/in/tomaslopezmancina/"  target="_blank" rel="noopener noreferrer"  className={styles.uno}>
        <img src={tomas} alt='' />
        <p>Tomás</p>
        <p>López Mancina</p>
         </a>
         <a href="https://www.linkedin.com/in/valentinaavenda%C3%B1o/"  target="_blank" rel="noopener noreferrer" className={styles.uno}>
        <img src={valen} alt='' />
        <p>Valentina</p>
        <p>Avendaño</p>
         </a>
     </div>
    <div className={styles.cards}>
     <div className= {styles.card}>
    <h1 >¿Quiénes somos?</h1>
    <p>Somos un grupo de desarrolladores que creen en la Educación como herramienta de movilidad y asenso social, como instrumento de impacto en la vida de los estudiantes. Es por esto que en AkademIT concebimos la educación como un proceso en el que se construye activamente con el alumno, en donde el estudiante es protagonista, y no testigo de este proceso, estando en el centro y no por fuera del aprendizaje para así poder modificar su realidad.</p>
    </div>
    <div className= {styles.card}>
     <h1>¿Qué hacemos?</h1>
    <p> En AkademIT ofrecemos cursos de distintos temas relacionados con el mundo It siendo conscientes que es realmente necesario capacitarse en distintos lenguages informáticos y nuevas dinámicas de trabajo. Es por esto en nuestras plataforma, instructores calificados y verificados, sueben sus propuestas para capacitar en alguna temática en particular a todos los interesados en aumentar sus conocimientos y skills para las demandas del mercado laboral. </p>
    </div>
    <div className= {styles.card}>
     <h1>¿Cómo nació AkademIT?</h1>
    <p> AkademIT surge como un trabajo final de cierre del Henry Bootcamp en el cual se espera que un grupo de alumnos integren todo lo aprendido en los últimos 4 meses y puedan desarrollar un proyecto innovador y útil para la sociedad. Es por eso que creamos AkademIT, una plataforma que ofrece formación en las últimas tecnologías y asistencia constante a los usuarios ante cualquier inconveniente que pueda surgir.  </p>
    </div>
    </div>
         <div className={styles.img}>
<img alt="" src="https://www.xplora.eu/wp-content/uploads/como-escribir-web-sobre-nosotros.jpg"/> 
         </div>
         
     </div>
    
    </div>
    <Footer/>
    </div>
    

)
};