import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./AnimatedSectionStyles.module.css";

function AnimatedSection({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollAnimation({ once: true });

  return (
    <div
      ref={ref}
      className={`${styles.animatedSection} ${isVisible ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;

