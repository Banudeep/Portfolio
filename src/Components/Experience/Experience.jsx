import React from "react";
import styles from "./ExperienceStyles.module.css";
import gmuLogo from "../../assets/tech-logos/Header_logo_George-Mason-University-2024_0.png";
import persistentLogo from "../../assets/tech-logos/persistent-systems-seeklogo.png";
import vsoftLogo from "../../assets/tech-logos/vsoft.webp";
import profilePic from "../../assets/banudeep_picture.jpeg";

const experiences = [
  {
    company: "George Mason University",
    logo: gmuLogo,
    role: "Graduate Research Assistant",
    location: "Fairfax, VA",
    dates: "Aug 2024 – May 2025",
    description: [
      "Developed high-performance web scraping tools using Python and Selenium, leveraging threading to efficiently collect over 1 million data points. These tools supported enhanced statistical analysis and improved data quality across projects. I also designed and managed an experimental web platform integrating GPT to conduct over 500 pre- and post-treatment surveys, boosting insight accuracy and experimental rigor. Through collaboration on over five research projects, I strengthened data analysis workflows and implemented advanced AI technologies for scalable, research-driven solutions.",
    ],
    tech: [
      "Python",
      "Selenium",
      "Threading",
      "GPT",
      "Web Development",
      "Data Analysis",
    ],
    picture: profilePic,
  },
  {
    company: "Persistent Systems Limited",
    logo: persistentLogo,
    role: "Software Engineer",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Jul 2023",
    description: [
      "Designed and implemented stored procedures and SQL queries to migrate data from client databases to Google BigQuery using DBT Cloud, managing over 50 database pipelines. To ensure accuracy, I developed Python scripts that automated data verification, reducing manual checks by 40%. I also prepared detailed reports and offered technical recommendations that improved project workflows and tool efficiency. These efforts contributed to streamlined data operations and enhanced data integrity across multiple client environments.",
    ],
    tech: ["SQL", "BigQuery", "DBT Cloud", "Python", "Google Cloud Platform"],
    picture: profilePic,
  },
  {
    company: "Vsoft Technologies Pvt Ltd",
    logo: vsoftLogo,
    role: "Software Engineer Intern",
    location: "Hyderabad, India",
    dates: "Jun 2020 – Jul 2020",
    description: [
      "Developed a data extraction system using OpenCV and Python to process over 1,000 nationally issued identification cards. The system automated image preprocessing and text recognition, significantly improving efficiency. I also implemented validation algorithms to verify data accuracy, achieving a validation success rate exceeding 95%. This project demonstrated strong skills in computer vision, data quality assurance, and automation.",
    ],
    tech: ["OpenCV", "Python", "Data Extraction", "Validation Algorithms"],
    picture: profilePic,
  },
];

const Experience = () => (
  <section id="Experience" className={styles.experienceSection}>
    <h1>Experience</h1>
    <div className={styles.cardContainer}>
      {experiences.map((exp, idx) => (
        <div className={styles.cardRow} key={exp.company}>
          <div className={styles.logoCard}>
            <img
              src={exp.logo}
              alt={exp.company + " logo"}
              className={styles.companyLogo}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.infoCol}>
              <div className={styles.companyRow}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.role}>{exp.role}</span>
              </div>
              <div className={styles.dateRow}>
                <span>{exp.location}</span>
                <span className={styles.dates}>{exp.dates}</span>
              </div>
              <div className={styles.description}>
                {Array.isArray(exp.description)
                  ? exp.description.map((d, i) => (
                      <span key={i}>
                        {d}
                        {i !== exp.description.length - 1 && <br />}
                      </span>
                    ))
                  : exp.description}
              </div>
              <div className={styles.techRow}>
                {exp.tech.map((t) => (
                  <span className={styles.techTag} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
