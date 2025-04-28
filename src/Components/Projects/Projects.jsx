import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";
import sos_app from "../../assets/sos-app.png";
import campus_feedback from "../../assets/campus_feedback.png";
import ProjectCard from "./ProjectCard/ProjectCard";

// Import FontAwesome icons
import {
  faReact,
  faAws,
  faPython,
  faAngular,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faDatabase,
  faCode,
  faRobot,
  faCamera,
  faLeaf,
  faCloud,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        { name: "React", icon: faReact },
        { name: "Google Maps", icon: faMapLocationDot },
      ],
    },
    {
      title: "SOS App",
      description:
        "An AI-powered emergency response system that detects accidents in real-time, automates incident reporting, and optimizes ambulance dispatch using intelligent geospatial analysis.",
      image: sos_app,
      link: "https://github.com/Banudeep/SOS-app",
      techStack: [
        { name: "FastAPI", icon: faCode },
        { name: "MongoDB", icon: faDatabase },
        { name: "Google Gemini API", icon: faRobot },
        { name: "OpenCV", icon: faCamera },
        { name: "Python", icon: faPython },
      ],
    },
    {
      title: "Campus Feedback Survey System",
      description:
        "A full-stack feedback management platform built with Angular and Spring Boot, featuring real-time survey submissions, secure AWS deployment, and MySQL storage on AWS RDS.",
      image: campus_feedback,
      link: "https://github.com/Banudeep/Campus-Feedback-Survey-System-Angular-Full-Stack-Web-Application",
      techStack: [
        { name: "Angular", icon: faAngular },
        { name: "Spring Boot", icon: faLeaf },
        { name: "AWS EC2", icon: faCloud },
        { name: "AWS RDS", icon: faDatabase },
        { name: "MySQL", icon: faDatabase },
        { name: "Java", icon: faJava },
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
      <div className={styles.viewAllContainer}>
        <a href="/#/projects" className={styles.viewAllButton}>
          View All Projects <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
