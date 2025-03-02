import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
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
      <h2 className={styles.title}>Sobre</h2>
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
                <a>Frontend</a>
              </h3>
              <p>
                Experiência na criação de sites responsivos para diversas
                plataformas, buscando sempre melhorar a experiência do usuário.
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
                <a>Backend</a>
              </h3>
              <p>
                Tenho estudado o desenvolvimento de sistemas e APIs eficientes,
                além de frameworks, com foco em escalabilidade, visando práticas
                de CI/CD e Cloud computing.
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
                <a>Outros</a>
              </h3>
              <p>
                Forte interesse em Inteligência Artificial, IoT e Análise de
                Dados. Sou também fluente em japonês e tenho bom domínio do
                inglês.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
