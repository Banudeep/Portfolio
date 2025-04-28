import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";
import ProjectCard from "./ProjectCard/ProjectCard";
// Import actual logo for React
import reactLogo from "../../assets/react.svg";

function Projects() {
  // Project data array
  const projectsData = [
    {
      title: "Zentrail",
      description: "A trail finding application built with React and Google Maps API",
      image: zentrail,
      link: "https://github.com/Banudeep/zentrail_bitcamp",
      techStack: [
        { name: "React", iconText: "react", logo: reactLogo },
        { name: "Google Maps", iconText: "map-location-dot" }
      ]
    },
    {
      title: "SecureFileStore",
      description: "A secure file storage solution that uses encryption to protect user data",
      customBackground: "secureFileStore",
      imageTitle: "Secure FileStore",
      link: "https://github.com/yourusername/securefilestore",
      techStack: [
        { name: "FastAPI", iconText: "bolt" },
        { name: "AWS S3", iconText: "aws" },
        { name: "MySQL", iconText: "database" },
        { name: "JWT", iconText: "key" }
      ]
    },
    {
      title: "Project Name",
      description: "Project description goes here",
      image: github_icon,
      link: "",
      techStack: [
        { name: "Tech 1", iconText: "code" },
        { name: "Tech 2", iconText: "gears" }
      ]
    },
    {
      title: "Project Name",
      description: "Project description goes here",
      image: github_icon,
      link: "",
      techStack: [
        { name: "Tech 1", iconText: "code" },
        { name: "Tech 2", iconText: "gears" }
      ]
    }
  ];

  return (
    <section id="Projects" className={styles.container}>
      <h1>projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
