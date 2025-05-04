import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Skills from "./Skills";
import Footer from "../Footer/Footer";
import OrganizedSkills from "./OrganizedSkills";

function SkillsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      <Navbar />
      {/* <Skills /> */}
      <OrganizedSkills />
      <Footer />
    </>
  );
}

export default SkillsPage;
