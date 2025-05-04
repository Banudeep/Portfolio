import React, { useEffect } from "react";
import styles from "./AllProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
  faGoogle,
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
  faFire,
  faLock,
  faProjectDiagram,
  faBoxOpen,
  faChartLine,
  faChartBar,
  // faHtml5,
  // faCss3,
  // faJsSquare,
  faSearch,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import github_icon from "../../../assets/github_icon.png";
import zentrail from "../../../assets/zentrail.png";
import sos_app from "../../../assets/sos-app.png";
import campus_feedback from "../../../assets/campus_feedback.png";
import fraudsense from "../../../assets/fraudsense.png";
import portfolio from "../../../assets/portfolio.png";
import medifact from "../../../assets/medifact.png";
import classifier from "../../../assets/classifier.png";
import ASL from "../../../assets/ASL.png";

function AllProjects() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // All projects data array - includes projects from the main page plus additional ones
  const allProjectsData = [
    // Original projects from main page
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
    {
      title: "Campus Feedback Survey System",
      description:
        "A full-stack feedback management platform built with Angular and Spring Boot, featuring real-time survey submissions, secure AWS deployment, and MySQL storage on AWS RDS.",
      image: campus_feedback,
      link: "https://github.com/Banudeep/Campus-Feedback-Survey-System-Angular-Full-Stack-Web-Application",
      techStack: [
        { name: "Angular", icon: faAngular },
        { name: "Spring Boot", icon: faLeaf },
        { name: "Java", icon: faJava },
        { name: "AWS EC2", icon: faCloud },
        { name: "AWS RDS", icon: faDatabase },
        { name: "MySQL", icon: faDatabase },
      ],
    },

    // Additional projects
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Vite, featuring a clean UI, dynamic project showcases, and smooth animations.",
      image: portfolio,
      link: "https://github.com/Banudeep/Portfolio",
      techStack: [
        { name: "React", icon: faReact },
        { name: "JavaScript", icon: faJs },
        { name: "Vite", icon: faCode },
      ],
    },
    {
      title: "Fraud Sense",
      description:
        "A real-time fraud detection system built using AWS, Databricks, and ML models to process financial transactions, reduce false positives, and automate fraud alerts.",
      image: fraudsense, // replace with your image import
      link: "https://devpost.com/software/finshieldai",
      techStack: [
        { name: "AWS", icon: faAws },
        { name: "Databricks", icon: faCloud },
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: faCode },
        { name: "DynamoDB", icon: faDatabase },
        { name: "S3", icon: faDatabase },
        { name: "OpenAI API", icon: faRobot },
      ],
    },
    {
      title: "PASCAL VOC Multi-Label Classifier",
      description:
        "Implemented a PyTorch-based image classifier to detect multiple object categories per image in the PASCAL VOC 2007 dataset using FCN and CNN architectures.",
      image: classifier, // import like: import pascal_classifier from "../assets/pascal_classifier.png"
      link: "https://github.com/Banudeep/pascal-voc-multilabel", // replace with your GitHub repo if different
      techStack: [
        { name: "PyTorch", icon: faFire },
        { name: "Python", icon: faPython },
        { name: "CNN", icon: faBrain },
        { name: "FCN", icon: faProjectDiagram },
        { name: "Google Colab", icon: faGoogle },
        { name: "Matplotlib", icon: faChartBar },
      ],
    },
    {
      title: "ASL Translator",
      description:
        "A real-time American Sign Language (ASL) translator using computer vision and deep learning, enabling seamless communication for the hearing impaired.",
      image: ASL,
      link: "https://github.com/Banudeep/fitness-tracker",
      techStack: [
        { name: "OpenCV", icon: faCamera },
        { name: "TensorFlow", icon: faCode },
        { name: "Python", icon: faPythonIcon },
        { name: "NumPy", icon: faChartLine },
        { name: "Flask", icon: faCode },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Link to="/" state={{ section: "Hero" }} className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </Link>
        <h1>All Projects</h1>
      </div>
      <div className={styles.projectsContainer}>
        {allProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default AllProjects;
