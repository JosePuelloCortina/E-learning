import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLinks}>
          <a className={styles.link} href="#">
            Sobre Nosotros
          </a>
          <a className={styles.link} href="#">
            Contacto
          </a>
        </div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerIcons}>
          <a href="https://www.linkedin.com/" target="_blank">
            <img
              src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
              alt="Png Linkedin Icon"
            />
          </a>
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
