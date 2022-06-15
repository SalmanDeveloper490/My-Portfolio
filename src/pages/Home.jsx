import React from "react";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Top from "../components/top/Top";
import Resume from "../components/resume/Resume";
import Footer from "../components/footer/Footer";

const Home = ({ dark, setDark }) => {
  return (
    <>
      <div className="container mx-auto">
        {/* TOP SECTION */}
        <Top dark={dark} setDark={setDark} />

        {/* INTRO SECTION */}
        <Intro />

        {/* ABOUT SECTION */}
        <About />

        {/* RESUME SECTION */}
        <Resume />

        {/* SKILLS SECTION */}
        <Skills />

        {/*  PROJECTS SECTION */}
        <Projects />

        {/* CONTACT SECTION */}
        <Contact />

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
