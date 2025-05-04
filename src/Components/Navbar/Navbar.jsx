import React from "react";
import styles from "./NavbarStyles.module.css";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to handle smooth scrolling to sections on the homepage
  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Get navbar height - fix the selector to match your actual navbar
        const navbar = document.querySelector(`.${styles.navbar}`);
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        // Scroll to section with offset for navbar
        const sectionPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          30;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.Home}>
        {isHomePage ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Banudeep Reddy Gade
          </a>
        ) : (
          <Link to="/">Banudeep Reddy Gade</Link>
        )}
      </div>
      <div className={styles.nav_links}>
        <li>
          {isHomePage ? (
            <a
              href="#Hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About
            </a>
          ) : (
            <Link to="/" state={{ section: "Hero" }}>
              About
            </Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a
              href="#Projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Projects");
              }}
            >
              Projects
            </a>
          ) : (
            <Link to="/" state={{ section: "Projects" }}>
              Projects
            </Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a
              href="#Skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Skills");
              }}
            >
              Skills
            </a>
          ) : (
            <Link to="/" state={{ section: "Skills" }}>
              Skills
            </Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a
              href="#Experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Experience");
              }}
            >
              Experience
            </a>
          ) : (
            <Link to="/" state={{ section: "Experience" }}>
              Experience
            </Link>
          )}
        </li>
        {/* <li>
          {isHomePage ? (
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          ) : (
            <Link to="/" state={{ section: "contact" }}>
              Contact
            </Link>
          )}
        </li> */}
      </div>
    </nav>
  );
}

export default Navbar;
