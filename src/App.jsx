import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import PageTransition from "./Components/PageTransition/PageTransition";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import SkipToContent from "./Components/SkipToContent/SkipToContent";

// Lazy load components for code splitting
const Hero = lazy(() => import("./Components/Hero/Hero"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const AllProjects = lazy(() =>
  import("./Components/Projects/AllProjects/AllProjects")
);
const SkillsPage = lazy(() => import("./Components/Skills/SkillsPage"));

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
    <PageTransition>
      <SkipToContent />
      <ScrollProgress />
      <ScrollHandler />
      <Navbar />
      <main id="Hero">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Projects />
          <Skills />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </PageTransition>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <SkipToContent />
                  <ScrollProgress />
                  <ScrollHandler />
                  <Navbar />
                  <main>
                    <Suspense fallback={<LoadingSpinner />}>
                      <AllProjects />
                    </Suspense>
                  </main>
                  <Suspense fallback={null}>
                    <Footer />
                  </Suspense>
                  <ScrollToTop />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition>
                  <Suspense fallback={<LoadingSpinner />}>
                    <SkillsPage />
                  </Suspense>
                </PageTransition>
              }
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
