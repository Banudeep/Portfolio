import React, { useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import MobileNav from "./Components/Navbar/MobileNav"; // Import MobileNav component
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import AllProjects from "./Components/Projects/AllProjects/AllProjects";
import SkillsPage from "./Components/Skills/SkillsPage";
import Experience from "./Components/Experience/Experience";

// This component handles scrolling to sections when navigating from other pages
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // Force scroll to top on initial load or refresh
    if (!location.state) {
      window.scrollTo(0, 0);
    }

    // Check if we have a target section to scroll to
    else if (location.state && location.state.section) {
      const sectionId = location.state.section;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (sectionId === "Hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100); // Small delay to ensure components are rendered
    }
  }, [location]);

  return null;
}

function HomePage() {
  // Reset scroll position when the HomePage component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollHandler />
      <Navbar />
      <MobileNav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <MobileNav />
              <AllProjects />
              <Footer />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navbar />
              <MobileNav />
              <SkillsPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
