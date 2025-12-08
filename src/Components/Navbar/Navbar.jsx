import React, { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("Hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["Hero", "Projects", "Skills"];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event) => {
      const navLinks = document.querySelector(`.${styles.nav_links}`);
      const menuButton = document.querySelector(`.${styles.mobileMenuButton}`);
      const themeToggle = document.querySelector(`.${styles.themeToggle}`);
      
      if (
        navLinks &&
        menuButton &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target) &&
        !themeToggle?.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Small delay to prevent immediate closing when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.Home}>
        {isHomePage ? (
          <a
            href="#Hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("Hero");
            }}
            aria-label="Go to top of page"
          >
            Banudeep Reddy Gade
          </a>
        ) : (
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              navigate("/");
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
            }}
            aria-label="Go to home page"
          >
            Banudeep Reddy Gade
          </Link>
        )}
      </div>
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>
      <div className={`${styles.nav_links} ${isMobileMenuOpen ? styles.nav_links_open : ""}`}>
        <li>
          {isHomePage ? (
            <a
              href="#Hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("Hero");
              }}
              className={activeSection === "Hero" ? styles.active : ""}
              aria-current={activeSection === "Hero" ? "page" : undefined}
            >
              About
            </a>
          ) : (
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                navigate("/");
                setTimeout(() => {
                  const heroSection = document.getElementById("Hero");
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }, 200);
              }}
              aria-label="Navigate to About section"
            >
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
                setActiveSection("Projects");
              }}
              className={activeSection === "Projects" ? styles.active : ""}
              aria-current={activeSection === "Projects" ? "page" : undefined}
            >
              Projects
            </a>
          ) : (
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                navigate("/");
                setTimeout(() => {
                  const projectsSection = document.getElementById("Projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 200);
              }}
              aria-label="Navigate to Projects section"
            >
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
                setActiveSection("Skills");
              }}
              className={activeSection === "Skills" ? styles.active : ""}
              aria-current={activeSection === "Skills" ? "page" : undefined}
            >
              Skills
            </a>
          ) : (
            <Link 
              to="/skills" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Navigate to Skills page"
            >
              Skills
            </Link>
          )}
        </li>
        {/* <li>
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
        </li> */}
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
        <li>
          <button
            className={styles.themeToggle}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
