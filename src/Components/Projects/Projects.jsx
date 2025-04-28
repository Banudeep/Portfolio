import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";
import reactLogo from "../../assets/react.svg";
import ProjectCard from "./ProjectCard/ProjectCard";

// Import FontAwesome icons
import { faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faBolt,
  faDatabase,
  faKey,
  faCode,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  // Project data array
  const projectsData = [
    {
      title: "Zentrail",
      description:
        "A trail finding application built with React and Google Maps API",
      image: zentrail,
      link: "https://github.com/Banudeep/zentrail_bitcamp",
      techStack: [
        { name: "React", icon: faReact },
        { name: "Google Maps", icon: faMapLocationDot },
      ],
    },
    {
      title: "SecureFileStore",
      description:
        "A secure file storage solution that uses encryption to protect user data",
      customBackground: "secureFileStore",
      imageTitle: "Secure FileStore",
      link: "https://github.com/yourusername/securefilestore",
      techStack: [
        { name: "FastAPI", icon: faBolt },
        { name: "AWS S3", icon: faAws },
        { name: "MySQL", icon: faDatabase },
        { name: "JWT", icon: faKey },
      ],
    },
    {
      title: "Project Name",
      description: "Project description goes here",
      image: github_icon,
      link: "",
      techStack: [
        { name: "Tech 1", icon: faCode },
        { name: "Tech 2", icon: faGears },
      ],
    },
    {
      title: "Project Name",
      description: "Project description goes here",
      image: github_icon,
      link: "",
      techStack: [
        { name: "Tech 1", icon: faCode },
        { name: "Tech 2", icon: faGears },
      ],
    },
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
