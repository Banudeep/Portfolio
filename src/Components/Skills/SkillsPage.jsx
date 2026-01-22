import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Skills from "./Skills";
import Footer from "../Footer/Footer";
import OrganizedSkills from "./OrganizedSkills";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import SkipToContent from "../SkipToContent/SkipToContent";

function SkillsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <br />
      <Navbar />
      <main>
        <Skills showButton={false} enableFiltering={true} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SkillsPage;
