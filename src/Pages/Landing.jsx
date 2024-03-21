import React, { useEffect, useState } from "react";
import { Navbar, Hero, About, Portfolio, Contact, Footer } from "../component";
import Skill from "../component/Skills";
import { Outlet } from "react-router-dom";

const getLocalStorage = () => {
  const storeDarkMode = localStorage.getItem("dark-mode") === true;
  return storeDarkMode;
};

const Landing = () => {
  const [theme, setTheme] = useState(getLocalStorage());

  let newTheme = !theme;

  const toggleTheme = () => {
    setTheme(newTheme);

    localStorage.setItem("dark-mode", newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
  };

  // useEffect(() => {
  //   document.body.classList.toggle("dark-mode", newTheme);
  // }, [newTheme]);

  return (
    <main>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Landing;
