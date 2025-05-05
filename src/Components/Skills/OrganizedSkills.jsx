import React from "react";
import { useEffect } from "react";
import reactIcon from "../../assets/react.svg";
import styles from "./OrganizedSkillsStyles.module.css";
import pythonLogo from "../../assets/tech-logos/python-logo-only.svg";
import nodeLogo from "../../assets/tech-logos/node-js.svg";
import jsLogo from "../../assets/tech-logos/javascript-logo-svgrepo-com.svg";
import tsLogo from "../../assets/tech-logos/ts-logo-256.svg";
import htmlLogo from "../../assets/tech-logos/HTML5_logo_and_wordmark.svg";
import cssLogo from "../../assets/tech-logos/Official_CSS_Logo.svg.png";
import cLogo from "../../assets/tech-logos/C_Programming_Language.svg.png";
import cppLogo from "../../assets/tech-logos/ISO_C++_Logo.svg.png";
import javaLogo from "../../assets/tech-logos/java.svg";
import sqlLogo from "../../assets/tech-logos/sql-database-generic-svgrepo-com.svg";
import angularLogo from "../../assets/tech-logos/icons8-angular-96.png";
import vueLogo from "../../assets/tech-logos/Vue.js_Logo_2.svg.png";
import reduxLogo from "../../assets/tech-logos/redux.svg";
import nodejsLogo from "../../assets/tech-logos/node-js.svg";
import expressLogo from "../../assets/tech-logos/express-original.svg";
import fastapiLogo from "../../assets/tech-logos/fastapi-1.svg";
import postmanLogo from "../../assets/tech-logos/postman.svg";
import mysqlLogo from "../../assets/tech-logos/mysql-logo-pure.svg";
import mongodbLogo from "../../assets/tech-logos/mongodb-icon-1.svg";
// import rdsLogo from "../../assets/tech-logos/sql-database-generic-svgrepo-com.svg";
import awsLogo from "../../assets/tech-logos/aws-2.svg";
import dockerLogo from "../../assets/tech-logos/docker-4.svg";
import kubernetesLogo from "../../assets/tech-logos/kubernets.svg";
import gitLogo from "../../assets/tech-logos/git-icon.svg";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
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
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Angular", icon: angularLogo },
      { name: "Vue", icon: vueLogo },
      { name: "Redux", icon: reduxLogo },
    ],
  },
  {
    title: "Backend / APIs",
    skills: [
      { name: "Node.js", icon: nodejsLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "FastAPI", icon: fastapiLogo },
      { name: "Postman", icon: postmanLogo },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: mysqlLogo },
      { name: "MongoDB", icon: mongodbLogo },
      //   { name: "RDS", icon: null },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: awsLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "Kubernetes", icon: kubernetesLogo },
      { name: "Git", icon: gitLogo },
    ],
  },
];

const defaultIcon = reactIcon; // Use reactIcon as a placeholder for missing icons

const OrganizedSkills = () => (
  <section className={styles.organizedSkillsSection}>
    <h1 className={styles.organizedSkillsTitle}>Skills</h1>
    <div className={styles.organizedCategoriesGrid}>
      {skillCategories.map((category) => (
        <div key={category.title} className={styles.organizedCategoryCard}>
          <h2 className={styles.organizedCategoryTitle}>{category.title}</h2>
          <div className={styles.organizedSkillsGrid}>
            {category.skills.map((skill) => (
              <div key={skill.name} className={styles.organizedSkillItem}>
                <div className={styles.organizedSkillIconWrapper}>
                  <img
                    src={skill.icon || defaultIcon}
                    alt={skill.name + " icon"}
                    className={styles.organizedSkillIcon}
                  />
                </div>
                <span className={styles.organizedSkillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OrganizedSkills;
