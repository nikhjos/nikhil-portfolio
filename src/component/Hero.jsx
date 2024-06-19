import React from "react";
import heroImg from "../assets/user_image.svg";
import Wrapper from "../assets/Wrappers/Hero";
import Resume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section>
      <div id="hero">
        <div className="hero-center">
          <div className="hero-image-small">
            <img src={heroImg} alt="hero" />
          </div>
          <div className="hero-intro">
            <h4>Hello There, My Name is</h4>
            <h2>Nikhil Joshi</h2>
            <span>Front-End Developer</span>
            <p>
              Crafting engaging user experiances through innovative front-end
              development solutions
            </p>

            <div className="btns">
              <a href={Resume} download>
                Download Cv
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
