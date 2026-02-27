import zentrail from "../assets/zentrail.png";
import sos_app from "../assets/sos-app.png";
import medifact from "../assets/medifact.png";
import campus_feedback from "../assets/campus_feedback.png";
import cascade_voice from "../assets/cascadeVoice.png";
import stsvoice from "../assets/STSVoice.png";
import fitnesstracker from "../assets/fitnesstracker.png";
import farmer_grants_voicebot from "../assets/farmerGrantsVoicebot.png";
import fraudsense from "../assets/fraudsense.png";
import portfolio from "../assets/portfolio.png";
import classifier from "../assets/classifier.png";
import ASL from "../assets/ASL.png";

// Tech Logos
import reactIcon from "../assets/react.svg";
import pythonLogo from "../assets/tech-logos/python-logo-only.svg";
import nodeLogo from "../assets/tech-logos/node-js.svg";
import jsLogo from "../assets/tech-logos/javascript-logo-svgrepo-com.svg";
import tsLogo from "../assets/tech-logos/ts-logo-256.svg";
import htmlLogo from "../assets/tech-logos/HTML5_logo_and_wordmark.svg";
import cssLogo from "../assets/tech-logos/Official_CSS_Logo.svg.png";
import cLogo from "../assets/tech-logos/C_Programming_Language.svg.png";
import cppLogo from "../assets/tech-logos/ISO_C++_Logo.svg.png";
import javaLogo from "../assets/tech-logos/java.svg";
import sqlLogo from "../assets/tech-logos/sql-database-generic-svgrepo-com.svg";
import angularLogo from "../assets/tech-logos/icons8-angular-96.png";
import vueLogo from "../assets/tech-logos/Vue.js_Logo_2.svg.png";
import reduxLogo from "../assets/tech-logos/redux.svg";
import nodejsLogo from "../assets/tech-logos/node-js.svg";
import expressLogo from "../assets/tech-logos/express-original.svg";
import fastapiLogo from "../assets/tech-logos/fastapi-1.svg";
import postmanLogo from "../assets/tech-logos/postman.svg";
import mysqlLogo from "../assets/tech-logos/mysql-logo-pure.svg";
import mongodbLogo from "../assets/tech-logos/mongodb-icon-1.svg";
import awsLogo from "../assets/tech-logos/aws-2.svg";
import dockerLogo from "../assets/tech-logos/docker-4.svg";
import kubernetesLogo from "../assets/tech-logos/kubernets.svg";
import gitLogo from "../assets/tech-logos/git-icon.svg";

import {
  faReact,
  faAws,
  faPython,
  faAngular,
  faJava,
  faJs,
  faNode,
  faHtml5,
  faCss3,
  faChrome,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faDatabase,
  faCode,
  faRobot,
  faCamera,
  faLeaf,
  faCloud,
  faServer,
  faBoxOpen,
  faBrain,
  faFire,
  faProjectDiagram,
  faChartLine,
  faChartBar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const profileData = {
  name: "Banudeep Reddy Gade",
  title: "Software Engineer",
  description:
    "Passionate about building scalable, data-driven solutions using full-stack development, cloud technologies, and AI integration.",
  email: "gbanudeepreddy@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/banudeep-reddy-gade-118013212/",
    github: "https://github.com/Banudeep",
  },
  resume: "Banudeep_Reddy_Resume.pdf",
};

export const allProjectsData = [
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
    title: "Voicebot Farmer Grants",
    description:
      "A voice-enabled assistant that helps users explore farmer grant information through natural conversation and guided responses.",
    image: farmer_grants_voicebot,
    link: "https://github.com/Banudeep/Voicebot-Farmer-Grants",
    techStack: [
      { name: "Python", icon: faPython },
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "OpenAI", icon: faBrain },
      { name: "WebSocket", icon: faServer },
    ],
  },
  {
    title: "FitTrack",
    description:
      "A cross-platform mobile application designed to help users track their workout progress, visualize data with insightful charts, and stay consistent with their fitness goals.",
    image: fitnesstracker,
    link: "https://github.com/Banudeep/FitnessTracker",
    techStack: [
      { name: "React Native", icon: faReact },
      { name: "Expo", icon: faBoxOpen },
      { name: "TypeScript", icon: tsLogo },
      { name: "SQLite", icon: sqlLogo },
      { name: "Firebase", icon: faCloud },
    ],
  },
  {
    title: "CascadeVoice",
    description:
      "A real-time voice agent with streaming speech-to-text (STT), large language model (LLM), and text-to-speech (TTS) capabilities. Features multi-provider support (Deepgram, Azure Speech, OpenAI, Azure OpenAI), natural conversation flow with interruption support, live transcription, and a modern web interface.",
    image: cascade_voice,
    link: "https://github.com/Banudeep/Voicebot-Cascading",
    techStack: [
      { name: "Python", icon: faPython },
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
    image: stsvoice,
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
    image: medifact,
    link: "https://devpost.com/software/medifact",
    techStack: [
      { name: "Manifest V3, Chrome Extension", icon: faChrome },
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
    image: fraudsense,
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
    image: classifier,
    link: "https://github.com/Banudeep/pascal-voc-multilabel",
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
      { name: "Python", icon: faPython },
      { name: "NumPy", icon: faChartLine },
      { name: "Flask", icon: faCode },
    ],
  },
];

const featuredProjectTitles = [
  "Zentrail",
  "Voicebot Farmer Grants",
  "FitTrack",
];

export const projectsData = allProjectsData.filter(({ title }) =>
  featuredProjectTitles.includes(title),
);

export const skillsData = {
  programmingLanguages: [
    { name: "Python", icon: pythonLogo },
    // { name: "Node", icon: nodeLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "TypeScript", icon: tsLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "C", icon: cLogo },
    { name: "C++", icon: cppLogo },
    { name: "Java", icon: javaLogo },
    { name: "SQL", icon: sqlLogo },
  ],
  frontend: [
    { name: "React", icon: reactIcon },
    { name: "Angular", icon: angularLogo },
    { name: "Vue", icon: vueLogo },
    { name: "Redux", icon: reduxLogo },
  ],
  backend: [
    { name: "Node.js", icon: nodejsLogo },
    { name: "Express.js", icon: expressLogo },
    { name: "FastAPI", icon: fastapiLogo },
    { name: "Postman", icon: postmanLogo },
  ],
  databases: [
    { name: "MySQL", icon: mysqlLogo },
    { name: "MongoDB", icon: mongodbLogo },
  ],
  cloud: [
    { name: "AWS", icon: awsLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "Kubernetes", icon: kubernetesLogo },
    { name: "Git", icon: gitLogo },
  ],
};

export const featuredSkills = [
  { name: "Java", icon: javaLogo },
  { name: "Python", icon: pythonLogo },
  { name: "AWS", icon: awsLogo },
  { name: "React", icon: reactIcon },
  { name: "JavaScript", icon: jsLogo },
  { name: "TypeScript", icon: tsLogo },
  { name: "C++", icon: cppLogo },
  { name: "Docker", icon: dockerLogo },
];
