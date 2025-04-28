import React from "react";
import styles from "./ProjectsStyles.module.css";
import github_icon from "../../assets/github_icon.png";
import zentrail from "../../assets/zentrail.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      {/* <br></br> */}
      <h1>projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/Banudeep/zentrail_bitcamp" target="_blank">
          <img
            className="hover"
            src={zentrail}
            alt="project Picture"
            style={{ width: "300px", height: "300px", objectFit: "fill" }}
          />
          <h3>Zentrail</h3>
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
