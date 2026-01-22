import zentrail from "../assets/zentrail.png";
import sos_app from "../assets/sos-app.png";
import medifact from "../assets/medifact.png";
import campus_feedback from "../assets/campus_feedback.png";
import cascade_voice from "../assets/cascadeVoice.png";
import fitnesstracker from "../assets/fitnesstracker.png";

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
  faVuejs,
  faHtml5,
  faCss3,
  faChrome,
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

export const projectsData = [
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
    image: cascade_voice,
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

];

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
