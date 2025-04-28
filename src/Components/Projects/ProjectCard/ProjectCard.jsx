import React from "react";
import styles from "../ProjectsStyles.module.css";
import github_icon from "../../../assets/github_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ project }) => {
  // Function to handle image load errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = github_icon; // Set fallback image
  };

  // Function to render a tech icon or logo
  const renderTechIcon = (tech) => {
    // If we have a FontAwesome icon
    if (tech.icon) {
      return <FontAwesomeIcon icon={tech.icon} className={styles.techIcon} />;
    }
    // If we have a custom logo image for this tech
    if (tech.logo) {
      return (
        <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
      );
    }
    return null;
  };

  return (
    <div className={styles.projectCard}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {project.customBackground ? (
          <div className={styles.projectImage}>
            <div className={styles[project.customBackground]}>
              <h3>{project.imageTitle}</h3>
            </div>
          </div>
        ) : (
          <img
            className={styles.projectImage}
            src={project.image}
            alt={project.title}
            onError={handleImageError}
          />
        )}
        <div className={styles.projectInfo}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.techStack}>
            {project.techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {renderTechIcon(tech)} {tech.name}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
