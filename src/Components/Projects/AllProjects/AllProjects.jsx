import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AllProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectFilter from "../../ProjectFilter/ProjectFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { allProjectsData } from "../../../data/index";

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
