import React from "react";
import heroImg from "../assets/hero-image.svg";
import Wrapper from "../assets/Wrappers/Hero";

const Hero = () => {
  return (
    <section>
      <div id="hero">
        <div className="hero-intro">
          <h2>Nikhil Joshi</h2>
          <span>Web Developer</span>
          <p>
            experianced wb developer specializing in creating innovative and
            user friendly digital solutions
          </p>

          <button type="button">Download Cv</button>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
