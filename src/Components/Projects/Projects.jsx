import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";
import sos_app from "../../assets/sos-app.png";
import medifact from "../../assets/medifact.png";
import campus_feedback from "../../assets/campus_feedback.png";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

// Import FontAwesome icons
import {
  faReact,
  faAws,
  faPython,
  faAngular,
  faJava,
  faJs,
  faNode,
  faVuejs,
  faHtml5,
  faCss3,
  faPython as faPythonIcon,
  faChrome,
  // faGemini,
  // faFastapi,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faDatabase,
  faCode,
  faRobot,
  faCamera,
  faLeaf,
  faCloud,
  faArrowLeft,
  faServer,
  faMobile,
  faLock,
  faBoxOpen,
  faChartLine,
  // faHtml5,
  // faCss3,
  // faJsSquare,
  faSearch,
  faArrowRight,
  faBrain,
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
        { name: "Leaflet", icon: faMapLocationDot },
        { name: "Node.js", icon: faNode },
        { name: "Express", icon: faServer },
        { name: "FastAPI", icon: faCode },
        { name: "MongoDB", icon: faDatabase },
      ],
    },
    {
      title: "SOS App",
      description:
        "An AI-powered emergency response system that detects accidents in real-time, automates incident reporting, and optimizes ambulance dispatch using intelligent geospatial analysis.",
      image: sos_app,
      link: "https://github.com/Banudeep/SOS-app",
      techStack: [
        { name: "React", icon: faReact },
        { name: "FastAPI", icon: faCode },
        { name: "Google Gemini API", icon: faRobot },
        { name: "OpenCV", icon: faCamera },
        { name: "MongoDB", icon: faDatabase },
        // { name: "Python", icon: faPython },
      ],
    },
    {
      title: "MediFact",
      description:
        "A Chrome extension that summarizes health content, verifies medical claims using AI, and explains complex terms with real-time glossary lookups.",
      image: medifact, // use your imported asset like: import medifact from "../assets/medifact.png"
      link: "https://devpost.com/software/medifact", // or GitHub if available
      techStack: [
        { name: "Manifest V3, Chrome Extension", icon: faChrome },
        // { name: "JavaScript", icon: faJs },
        // { name: "HTML", icon: faHtml5 },
        // { name: "CSS", icon: faCss3 },
        { name: "FastAPI", icon: faCode },
        { name: "Gemini API", icon: faRobot },
        { name: "Google Fact Check API", icon: faSearch },
        { name: "BioBERT", icon: faBrain },
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
        <Link to="/projects" className={styles.viewAllButton}>
          View All Projects <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
