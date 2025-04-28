import React from "react";
import styles from "../ProjectsStyles.module.css";
import github_icon from "../../../assets/github_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icon color mapping using simpler structure
const iconColors = {
  react: "#61DAFB", // React blue
  "map-location-dot": "#4285F4", // Google blue
  bolt: "#009688", // FastAPI teal
  aws: "#FF9900", // AWS orange
  database: "#4479A1", // MySQL blue
  key: "#F7DF1E", // JWT yellow
  code: "#2F4F4F", // Dark slate gray
  gears: "#6C757D", // Gray
};

const ProjectCard = ({ project }) => {
  // Function to handle image load errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = github_icon; // Set fallback image
  };

  // Function to get color for an icon - simplified approach
  const getIconColor = (icon) => {
    if (!icon || !icon.iconName) return "#555";
    return iconColors[icon.iconName] || "#555";
  };

  // Function to render a tech icon or logo
  const renderTechIcon = (tech) => {
    // If we have a custom logo image for this tech
    if (tech.logo) {
      return (
        <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
      );
    }
    // Otherwise use FontAwesome icon with explicit color
    if (tech.icon) {
      return (
        <FontAwesomeIcon
          icon={tech.icon}
          style={{ color: getIconColor(tech.icon) }}
        />
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
              <span key={index}>
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
