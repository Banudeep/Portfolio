import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faBolt,
  faDatabase,
  faKey,
  faCode,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./ProjectCard/ProjectCard";
// Import actual logo for React
import reactLogo from "../../assets/react.svg";

function Projects() {
  // Project data array
  const projectsData = [
    {
      title: "Zentrail",
      description:
        "ZenTrail is an AI-powered platform that transforms national park exploration with interactive maps, personalized trip planning, real-time campground management, and park analytics, helping users plan smarter, explore deeper, and enjoy seamless outdoor adventures.",
      image: zentrail,
      link: "https://github.com/Banudeep/zentrail_bitcamp",
      techStack: [
        { name: "React", icon: faReact, logo: reactLogo },
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
