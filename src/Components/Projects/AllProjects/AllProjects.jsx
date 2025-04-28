import React from "react";
import styles from "./AllProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAws,
  faPython,
  faAngular,
  faJava,
  faJs,
  faNode,
  faVuejs,
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
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import github_icon from "../../../assets/github_icon.png";
import zentrail from "../../../assets/zentrail.png";
import sos_app from "../../../assets/sos-app.png";
import campus_feedback from "../../../assets/campus_feedback.png";

function AllProjects() {
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

    // Additional projects
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Vite, featuring a clean UI, dynamic project showcases, and smooth animations.",
      image: github_icon,
      link: "https://github.com/Banudeep/Portfolio",
      techStack: [
        { name: "React", icon: faReact },
        { name: "JavaScript", icon: faJs },
        { name: "Vite", icon: faCode },
      ],
    },
    {
      title: "Cloud Data Pipeline",
      description:
        "An automated ETL pipeline using AWS services for real-time data processing, analytics, and visualization. Processes large datasets from multiple sources for business intelligence.",
      image: github_icon,
      link: "https://github.com/Banudeep/cloud-data-pipeline",
      techStack: [
        { name: "AWS Lambda", icon: faAws },
        { name: "DynamoDB", icon: faDatabase },
        { name: "Python", icon: faPython },
        { name: "S3", icon: faBoxOpen },
      ],
    },
    {
      title: "Computer Vision Project",
      description:
        "A deep learning computer vision system that analyzes images to detect and classify objects in real-time, with applications in security monitoring and retail analytics.",
      image: github_icon,
      link: "https://github.com/Banudeep/cv-object-detection",
      techStack: [
        { name: "TensorFlow", icon: faCode },
        { name: "Python", icon: faPython },
        { name: "OpenCV", icon: faCamera },
        { name: "NumPy", icon: faChartLine },
      ],
    },
    {
      title: "E-Commerce Backend",
      description:
        "A scalable backend system for e-commerce platforms, featuring user authentication, product management, order processing, and payment integration.",
      image: github_icon,
      link: "https://github.com/Banudeep/ecommerce-api",
      techStack: [
        { name: "Node.js", icon: faNode },
        { name: "Express", icon: faServer },
        { name: "MongoDB", icon: faDatabase },
        { name: "JWT", icon: faLock },
      ],
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "A cross-platform mobile application that tracks workouts, nutrition, and progress with personalized recommendations and social features.",
      image: github_icon,
      link: "https://github.com/Banudeep/fitness-tracker",
      techStack: [
        { name: "React Native", icon: faReact },
        { name: "Firebase", icon: faDatabase },
        { name: "JavaScript", icon: faJs },
        { name: "Mobile APIs", icon: faMobile },
      ],
    },
    {
      title: "DevOps Automation Toolkit",
      description:
        "A suite of tools for automating CI/CD pipelines, infrastructure management, and deployment processes to improve development workflow efficiency.",
      image: github_icon,
      link: "https://github.com/Banudeep/devops-toolkit",
      techStack: [
        { name: "Docker", icon: faBoxOpen },
        { name: "Kubernetes", icon: faCloud },
        { name: "Python", icon: faPython },
        { name: "Bash", icon: faToolbox },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <a href="index.html#/" className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </a>
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
