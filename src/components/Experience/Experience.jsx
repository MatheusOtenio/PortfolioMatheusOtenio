import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [visible, setVisible] = useState(false);
  const historyRef = useRef(null);
  const animationFrame = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startAutoScroll = () => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);

    let scrollAmount = historyRef.current?.scrollTop || 0;
    const step = 0.15; // Velocidade da rolagem (pode ajustar conforme necessário)
    const target = historyRef.current;
    let direction = 1; // 1 = descendo, -1 = subindo

    const animateScroll = () => {
      if (!target || isPaused.current) return;

      scrollAmount += step * direction;

      if (scrollAmount >= target.scrollHeight - target.clientHeight) {
        direction = -1; // Inverte a direção para subir
      } else if (scrollAmount <= 0) {
        direction = 1; // Inverte a direção para descer
      }

      target.scrollTop = scrollAmount;
      animationFrame.current = requestAnimationFrame(animateScroll);
    };

    animationFrame.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    startAutoScroll();

    const handleTouchStart = () => {
      isPaused.current = true;
      cancelAnimationFrame(animationFrame.current);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused.current = false;
        startAutoScroll();
      }, 3000); // Espera 3 segundos antes de retomar
    };

    const target = historyRef.current;
    if (target) {
      target.addEventListener("touchstart", handleTouchStart);
      target.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (target) {
        target.removeEventListener("touchstart", handleTouchStart);
        target.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
    cancelAnimationFrame(animationFrame.current);
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    startAutoScroll(); // Reinicia a animação ao remover o mouse
  };

  return (
    <section className={styles.container} id="experience">
      <div className={styles.box}>
        {" "}
        {/* Quadrado com fundo --color-exp */}
        <h2 className={styles.title}>Experiência</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div
                key={id}
                className={`${styles.skill} ${visible ? styles.visible : ""}`}
              >
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    loading="lazy"
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
          <ul
            className={styles.history}
            ref={historyRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.name} - ${historyItem.organisation}`}</h3>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
