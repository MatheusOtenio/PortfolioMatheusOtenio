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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("matheus.otenio843@gmail.com");
              alert("E-mail copiado para a área de transferência!");
            }}
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/matheus-otenio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/MatheusOtenio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("+55 19 98253-5723");
              alert("Número copiado para a área de transferência!");
            }}
          >
            <img src={getImageUrl("contact/telefone.png")} alt="Telefone" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
