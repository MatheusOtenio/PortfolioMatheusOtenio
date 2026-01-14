import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useI18n } from "../../i18n";

export const About = () => {
  const { t } = useI18n();
  useEffect(() => {
    const aboutItems = document.querySelectorAll(`.${styles.aboutItem}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.06, // Reduzindo para garantir ativação no mobile
      }
    );

    aboutItems.forEach((item) => {
      observer.observe(item); // Observa cada item de "sobre"
    });

    return () => {
      observer.disconnect(); // Limpa a observação ao desmontar o componente
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("about.title")}</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={`${styles.aboutItem} ${styles.hidden}`}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/front.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>
                <a>{t("about.frontend.title")}</a>
              </h3>
              <p>
                {t("about.frontend.description")}
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} ${styles.hidden}`}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/back.png")}
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>
                <a>{t("about.backend.title")}</a>
              </h3>
              <p>
                {t("about.backend.description")}
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} ${styles.hidden}`}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/other.png")}
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>
                <a>{t("about.other.title")}</a>
              </h3>
              <p>
                {t("about.other.description")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
