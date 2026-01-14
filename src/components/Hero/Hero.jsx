import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Contact } from "../FormContact/FormContact.jsx";
import { useI18n } from "../../i18n";

export const Hero = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useI18n();

  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.appear}`}>
        <div className={`${styles.typewriter}`}>
          <h1 className={`${styles.title} ${styles.name}`}>
            {t("hero.title")}
          </h1>
          <p className={`${styles.description} ${styles.function}`}>
            {t("hero.subtitle")}
          </p>
        </div>

        <div className={`${styles.buttons} ${styles.appear}`}>
          <a
            href="/Curriculo_MatheusOtenio.pdf"
            download
            className={`${styles.downloadBtn} ${styles.appear}`}
          >
            {t("hero.downloadCv")}
          </a>
          <button
            className={`${styles.contactBtn} ${styles.appear}`}
            onClick={() => setShowContact(true)}
          >
            {t("hero.contactMe")}
          </button>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt={t("hero.imageAlt")}
        className={`${styles.heroImg} ${styles.appear}`}
      />

      <div className={`${styles.topBlur} ${styles.appear}`} />
      <div className={`${styles.bottomBlur} ${styles.appear}`} />

      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </section>
  );
};
