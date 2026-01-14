import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useI18n } from "../../i18n";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { language } = useI18n();
  const currentLang = language || "pt";

  const getText = (field) => {
    if (field && typeof field === "object") {
      return field[currentLang] || field.pt || field.en || field.jp || "";
    }
    if (typeof field === "string") {
      return field;
    }
    return "";
  };

  const displayTitle = getText(title);
  const displayDescription = getText(description);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>
          <h3 className={styles.title}>{displayTitle}</h3>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${displayTitle}`}
            className={styles.image}
          />
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.back}>
          <h3 className={styles.title}>{displayTitle}</h3>
          <p className={styles.description}>{displayDescription}</p>
          <div className={styles.links}>
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
