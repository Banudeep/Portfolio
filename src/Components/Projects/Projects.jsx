import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../../data/index";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <Link to="/projects" className={styles.viewAllButton}>
          View All Projects <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
