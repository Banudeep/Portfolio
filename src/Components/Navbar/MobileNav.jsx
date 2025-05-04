import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileNavStyles.module.css";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path, section = null) => {
    setIsOpen(false); // Close menu after selection

    if (section) {
      navigate("/", { state: { section } });
    } else {
      navigate(path);
    }
  };

  return (
    <div className={styles.mobileNav}>
      {/* Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuItems}>
          <div onClick={() => navigateTo("/", "Hero")}>Home</div>
          <div onClick={() => navigateTo("/", "Projects")}>Projects</div>
          <div onClick={() => navigateTo("/projects")}>All Projects</div>
          <div onClick={() => navigateTo("/", "Skills")}>Skills</div>
          <div onClick={() => navigateTo("/skills")}>Skills Details</div>
          <div onClick={() => navigateTo("/", "Experience")}>Experience</div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
