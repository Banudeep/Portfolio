import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      {/* <br></br> */}
      <h1>projects</h1>
      <div className={styles.projectsContainer}>
        <a href="" target="_blank">
          <img className="hover" src={github_icon} alt="project Picture" />
          <h3>Project Name</h3>
          <p> description </p>
        </a>
        <a href="" target="_blank">
          <img className="hover" src={github_icon} alt="project Picture" />
          <h3>Project Name</h3>
          <p> description </p>
        </a>
        <a href="" target="_blank">
          <img className="hover" src={github_icon} alt="project Picture" />
          <h3>Project Name</h3>
          <p> description </p>
        </a>
        <a href="" target="_blank">
          <img className="hover" src={github_icon} alt="project Picture" />
          <h3>Project Name</h3>
          <p> description </p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
