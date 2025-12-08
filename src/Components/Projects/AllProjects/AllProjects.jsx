import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AllProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectFilter from "../../ProjectFilter/ProjectFilter";
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
import cascade_voice from "../../../assets/cascadeVoice.png";
import stsvoice from "../../../assets/STSVoice.png";

function AllProjects() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredProjects, setFilteredProjects] = useState([]);

  // Memoize the filter change handler to prevent infinite loops
  const handleFilterChange = useCallback((filtered) => {
    setFilteredProjects(filtered);
  }, []);

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      title: "CascadeVoice",
      description:
        "A real-time voice agent with streaming speech-to-text (STT), large language model (LLM), and text-to-speech (TTS) capabilities. Features multi-provider support (Deepgram, Azure Speech, OpenAI, Azure OpenAI), natural conversation flow with interruption support, live transcription, and a modern web interface.",
      image: cascade_voice, // TODO: Add CascadeVoice image asset
      link: "https://github.com/Banudeep/Voicebot-Cascading",
      techStack: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: faCode },
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "Docker", icon: faBoxOpen },
        { name: "Azure", icon: faCloud },
        { name: "OpenAI", icon: faBrain },
        { name: "WebSocket", icon: faServer },
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
        { name: "Python", icon: faPython },
      ],
    },
    {
      title: "STSVoice",
      description:
        "A Speech-to-Speech voice agent powered by GPT-4o Realtime API that enables direct audio-to-audio processing with zero intermediate text conversion. Features ultra-low latency conversations, natural interruptions, server-side voice activity detection, full-duplex communication, and real-time transcription.",
      image: stsvoice, // TODO: Add STSVoice image asset
      link: "https://github.com/Banudeep/Voicebot-STS",
      techStack: [
        { name: "Python", icon: faPython },
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "Docker", icon: faBoxOpen },
        { name: "GPT-4o Realtime", icon: faBrain },
        { name: "WebSocket", icon: faServer },
        { name: "Azure", icon: faCloud },
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

  const displayProjects =
    filteredProjects.length > 0 ? filteredProjects : allProjectsData;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <button onClick={handleBackToHome} className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </button>
        <h1>All Projects</h1>
      </div>
      <ProjectFilter
        projects={allProjectsData}
        onFilterChange={handleFilterChange}
      />
      <div className={styles.projectsContainer}>
        {displayProjects.length > 0 ? (
          displayProjects.map((project, index) => (
            <ProjectCard key={project.title || index} project={project} />
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No projects found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProjects;
