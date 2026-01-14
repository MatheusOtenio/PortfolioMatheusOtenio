import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useI18n } from "../../i18n.jsx";

export const Contact = () => {
  const { t } = useI18n();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.subtitle")}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("matheus.otenio843@gmail.com");
              alert(t("contact.emailCopied"));
            }}
          >
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt={t("contact.emailAlt")}
            />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/matheus-otenio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt={t("contact.linkedinAlt")}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/MatheusOtenio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt={t("contact.githubAlt")}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("+55 19 98253-5723");
              alert(t("contact.phoneCopied"));
            }}
          >
            <img
              src={getImageUrl("contact/telefone.png")}
              alt={t("contact.phoneAlt")}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
