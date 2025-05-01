import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark.png";
import SkillList from "./SkillList";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function skills() {
  return (
    <section id="Skills" className={styles.container}>
      <h1>skills</h1>
      <div className={styles.skillList}>
        {/* Programming Languages */}
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        {/* Frontend Frameworks */}
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        {/* Backend / APIs */}
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="FastAPI" />
        <SkillList src={checkMarkIcon} skill="Postman" />
      </div>
      <hr />
      <div className={styles.skillList}>
        {/* Databases */}
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        {/* Cloud & DevOps */}
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <a href="#/skills">
          <button className={styles.gotoSkillsBtn}>
            View Skills <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default skills;
