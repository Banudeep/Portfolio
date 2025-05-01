import React from "react";
import styles from "./ExperienceStyles.module.css";

const Experience = () => (
  <section id="Experience" className={styles.experienceSection}>
    <h1 className={styles.heading}>Experience</h1>
    <div className={styles.experienceList}>
      <div className={styles.experienceItem}>
        <div className={styles.roleHeader}>
          <span className={styles.company}>George Mason University</span>
          <span className={styles.location}>Fairfax, VA</span>
          <span className={styles.dates}>Aug 2024 - May 2025</span>
        </div>
        <div className={styles.position}>Graduate Research Assistant</div>
        <ul className={styles.responsibilities}>
          <li>
            Developed web scraping tools using Python and Selenium,
            incorporating threading to enhance performance and collect over 1
            million data points for improved statistical analysis quality.
          </li>
          <li>
            Designed and managed an experimental website integrating GPT to
            conduct over 500 pre and post-treatment surveys, significantly
            improving experimental accuracy and insight generation.
          </li>
          <li>
            Collaborated on 5+ research projects, significantly enhancing data
            analysis capabilities and integrating advanced AI technologies.
          </li>
        </ul>
      </div>
      <div className={styles.experienceItem}>
        <div className={styles.roleHeader}>
          <span className={styles.company}>Persistent Systems Limited</span>
          <span className={styles.location}>Hyderabad, India</span>
          <span className={styles.dates}>Jun 2022 - Jul 2023</span>
        </div>
        <div className={styles.position}>Software Engineer</div>
        <ul className={styles.responsibilities}>
          <li>
            Designed and implemented stored procedures and custom SQL queries
            for migrating data from client databases to Google Cloud Platform’s
            BigQuery using DBT Cloud, handling over 50 client databases.
          </li>
          <li>
            Developed Python scripts to automate the verification of migrated
            data, enhancing data integrity and reducing manual checking by 40%.
          </li>
          <li>
            Prepared and delivered comprehensive reports and provided
            recommendations that improved processes and utilization of technical
            tools across projects.
          </li>
        </ul>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.roleHeader}>
          <span className={styles.company}>Vsoft Technologies Pvt Ltd</span>
          <span className={styles.location}>Hyderabad, India</span>
          <span className={styles.dates}>Jun 2020 - Jul 2020</span>
        </div>
        <div className={styles.position}>Software Engineer Intern</div>
        <ul className={styles.responsibilities}>
          <li>
            Developed a data extraction project utilizing OpenCV and Python to
            process over 1,000 nationally issued identification cards.
          </li>
          <li>
            Implemented validation algorithms to verify the accuracy of
            extracted data, achieving a validation success rate of over 95%.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
