import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import About from "./component/About";
import Projects from "./component/Projects";
import Contcat from "./component/Contcat";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contcat />
    </>
  );
};

export default App;
