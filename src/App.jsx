import React, { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import AllProjects from "./Components/Projects/AllProjects/AllProjects";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Footer />
          </>
        } />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
