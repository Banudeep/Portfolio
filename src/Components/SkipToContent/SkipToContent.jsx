import React from "react";
import styles from "./SkipToContentStyles.module.css";

function SkipToContent() {
  const handleSkip = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("Hero") || document.querySelector("main");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href="#Hero" className={styles.skipLink} onClick={handleSkip}>
      Skip to main content
    </a>
  );
}

export default SkipToContent;

