import React, { useState } from "react";
import styles from "./SkillsStyles.module.css";
import { featuredSkills, skillsData } from "../../data/index";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import checkMarkIcon from "../../assets/checkmark.png";

function Skills({ showButton = true, enableFiltering = false }) {
  const [activeTab, setActiveTab] = useState("All");

  // Format helper
  const formatCategory = (str) => {
    const formatted = str.replace(/([A-Z])/g, " $1");
    // Handle specific cases or generic capitalization
    if (str === "programmingLanguages") return "Languages";
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  // Get categories for filtering
  const categories = ["All", ...Object.keys(skillsData)];

  // Determine which skills to show
  let skillsDisplay = [];
  if (enableFiltering) {
    if (activeTab === "All") {
      skillsDisplay = Object.values(skillsData).flat();
    } else {
      skillsDisplay = skillsData[activeTab] || [];
    }
  } else {
    // If filtering is disabled, show only featured skills (minimalist view)
    skillsDisplay = featuredSkills;
  }

  return (
    <section id="Skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>

      {/* Show Tabs only if filtering is enabled */}
      {enableFiltering && (
        <div className={styles.tabsContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tabButton} ${
                activeTab === category ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              {formatCategory(category)}
            </button>
          ))}
        </div>
      )}

      {/* Skills Grid */}
      <div className={styles.skillsGrid}>
        {skillsDisplay.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className={styles.skillCard}>
            <div className={styles.iconWrapper}>
              <img
                src={skill.icon || checkMarkIcon}
                alt={skill.name}
                className={styles.skillIcon}
              />
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>

      {showButton && (
        <div className={styles.viewAllContainer}>
          <a href="#/skills" style={{ textDecoration: "none" }}>
            <button className={styles.gotoSkillsBtn}>
              View All Skills <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </div>
      )}
    </section>
  );
}

export default Skills;
