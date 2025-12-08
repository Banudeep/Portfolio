import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageTransitionStyles.module.css";

function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("entering");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("exiting");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "exiting") {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("entering");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`${styles.transitionWrapper} ${styles[transitionStage]}`}
      role="main"
    >
      {children}
    </div>
  );
}

export default PageTransition;

