import React from "react";
import Navbar from "../Navbar/Navbar";
import Skills from "./Skills";
import Footer from "../Footer/Footer";
import OrganizedSkills from "./OrganizedSkills";

function SkillsPage() {
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
