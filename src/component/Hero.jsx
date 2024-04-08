import React from "react";
import heroImg from "../assets/about-img.jpg";
import Wrapper from "../assets/Wrappers/Hero";
import Resume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section>
      <div id="hero">
        <div className="hero-center">
          <div className="hero-image">
            <img src={heroImg} alt="hero" />
          </div>
          <div className="hero-intro">
            <h2>Nikhil Joshi</h2>
            <span>Front-End Developer</span>
            <p>
              experianced web developer specializing in creating innovative and
              user friendly digital solutions
            </p>

            <div className="btns">
              <a href={Resume} download>
                Download Cv
              </a>

              <button type="button">contact me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
