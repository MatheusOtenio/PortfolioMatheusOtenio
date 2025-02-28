import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Duplica os projetos para criar o efeito infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.carousel}>
          {duplicatedProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
        <div className={`${styles.carousel} ${styles.carouselSecondary}`}>
          {duplicatedProjects.map((project, id) => (
            <ProjectCard key={`secondary-${id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
