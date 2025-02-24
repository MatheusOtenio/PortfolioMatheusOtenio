import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
        <p>Venha conversar comigo!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:matheus.otenio843@gmail.com">
            matheus.otenio843@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/matheus-otenio/">
            linkedin.com/in/matheus-otenio/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/MatheusOtenio">
            github.com/MatheusOtenio
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/telefone.png")} alt="Phone icon" />
          <a>(19) 98253-5723</a>
        </li>
      </ul>
    </footer>
  );
};
