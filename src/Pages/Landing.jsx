import React, { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Portfolio,
  Contact,
  Services,
  Footer,
} from "../component";
import Skill from "../component/Skills";

const getThemeFromLocalStorage = () => {
  const storeTheme = localStorage.getItem("store-theme") || true;

  return storeTheme;
};

const Landing = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const newTheme = !theme;

  const toggleTheme = () => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("store-theme", newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
  }, [newTheme]);

  return (
    <main>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Landing;
