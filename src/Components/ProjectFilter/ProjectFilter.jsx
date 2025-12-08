import React, { useState, useMemo, useEffect, useRef } from "react";
import styles from "./ProjectFilterStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function ProjectFilter({ projects, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const prevFilteredRef = useRef();

  // Get all unique technologies from projects
  const allTechs = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.techStack?.forEach((tech) => {
        techSet.add(tech.name);
      });
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTech =
        selectedTech === "" ||
        project.techStack?.some((tech) => tech.name === selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [projects, searchTerm, selectedTech]);

  // Notify parent of filtered results only when they actually change
  useEffect(() => {
    // Compare by serializing to JSON to detect actual changes
    const prevStr = JSON.stringify(
      prevFilteredRef.current?.map((p) => p.title)
    );
    const currentStr = JSON.stringify(filteredProjects.map((p) => p.title));

    if (prevStr !== currentStr) {
      prevFilteredRef.current = filteredProjects;
      onFilterChange(filteredProjects);
    }
  }, [filteredProjects, onFilterChange]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTech("");
  };

  return (
    <div
      className={styles.filterContainer}
      role="search"
      aria-label="Filter projects"
    >
      <div className={styles.filtersRow}>
        <div className={styles.searchContainer}>
          <FontAwesomeIcon
            icon={faSearch}
            className={styles.searchIcon}
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Search projects by name or description"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>

        <div className={styles.techFilter}>
          <label htmlFor="tech-filter" className={styles.filterLabel}>
            Filter:
          </label>
          <select
            id="tech-filter"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className={styles.techSelect}
            aria-label="Filter projects by technology"
          >
            <option value="">All Technologies</option>
            {allTechs.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {(searchTerm || selectedTech) && (
        <div className={styles.filterInfo}>
          <span>
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
          <button
            onClick={clearFilters}
            className={styles.clearAllButton}
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectFilter;
