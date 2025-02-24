import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Conteúdo de texto */}
      <div className={`${styles.content} ${styles.appear}`}>
        <div className={`${styles.typewriter}`}>
          <h1 className={`${styles.title} ${styles.name}`}>Matheus Otenio</h1>
          <p className={`${styles.description} ${styles.function}`}>
            I'm a Computer Engineer
          </p>
        </div>
        {/* Botões: Download CV + Contact Me */}
        <div className={`${styles.buttons} ${styles.appear}`}>
          <a
            href="/Curriculo_MatheusOtenio.pdf"
            download
            className={`${styles.downloadBtn} ${styles.appear}`}
          >
            Download CV
          </a>
          <a
            href="mailto:matheus.otenio843@gmail.com"
            className={`${styles.contactBtn} ${styles.appear}`}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Imagem */}
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles.appear}`}
      />

      {/* Blurs de fundo */}
      <div className={`${styles.topBlur} ${styles.appear}`} />
      <div className={`${styles.bottomBlur} ${styles.appear}`} />
    </section>
  );
};
