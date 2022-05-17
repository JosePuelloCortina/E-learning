import React from "react";
import styles from "./Footer.module.css";
import {Link} from "react-router-dom"; 
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLinks}>
        <a
            href="https://github.com/JosePuelloCortina/E-learning"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/344/github.png"
              width="350"
              alt="Png Github Icon"
            />
          </a>
          <a href="https://github.com/JosePuelloCortina/E-learning"  target="_blank"
           className={styles.link} >
            Repositorio en GitHub
          </a>
         
          
          
          {/* <a className={styles.link} href="#">
            Contacto
          </a> */}
        </div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerIcons}>
          <a href="https://www.linkedin.com/in/agustin-agis/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
            <p>Agustin Agis</p>
          </a>
          <a href="https://www.linkedin.com/in/albano-vignaduzzi/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>Albano Vignaduzzi</p>
          </a>
          <a href="https://www.linkedin.com/in/andreahubacek/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>Andrea Hubacek</p>
          </a>
          <a href="https://www.linkedin.com/in/gustavo-alegre-6b378b59/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>Gustavo Alegre</p>
          </a>
          </div> 
          <div className={styles.footerIcons}>
          <a href="https://www.linkedin.com/in/josepuello/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>José Puello</p>
          </a>
          <a href="https://www.linkedin.com/in/tomaslopezmancina/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>Tomás López Mancina</p>
          </a>
          <a href="https://www.linkedin.com/in/valentinaavenda%C3%B1o/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
             <p>Valentina Avendaño</p>
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
