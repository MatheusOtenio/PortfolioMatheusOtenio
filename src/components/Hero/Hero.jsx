import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Contact } from "../FormContact/FormContact.jsx";

export const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.appear}`}>
        <div className={`${styles.typewriter}`}>
          <h1 className={`${styles.title} ${styles.name}`}>Matheus Otenio</h1>
          <p className={`${styles.description} ${styles.function}`}>
            I'm a Computer Engineer
          </p>
        </div>

        <div className={`${styles.buttons} ${styles.appear}`}>
          <a
            href="/Curriculo_MatheusOtenio.pdf"
            download
            className={`${styles.downloadBtn} ${styles.appear}`}
          >
            Download CV
          </a>
          <button
            className={`${styles.contactBtn} ${styles.appear}`}
            onClick={() => setShowContact(true)}
          >
            Contact Me
          </button>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles.appear}`}
      />

      <div className={`${styles.topBlur} ${styles.appear}`} />
      <div className={`${styles.bottomBlur} ${styles.appear}`} />

      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </section>
  );
};
