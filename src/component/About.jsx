import React, { useState } from "react";
import aboutImg from "../assets/about-img.png";
import Title from "./Title";

import Wrapper from "../assets/Wrappers/About";
import { MdCastForEducation } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const About = () => {
  const [showContent, setShowContent] = useState("intro");

  const handleContent = (content) => {
    setShowContent(content);
  };
  return (
    <section>
      <div id="about">
        <div className="title">
          <Title name="About Me" size="3rem" weight="900" family="anta" />
        </div>

        <div className="about-center">
          <div className="aboutImg">
            <img src={aboutImg} alt="image" />
          </div>
          <div className="aboutInfo">
            <div className="about-btn">
              <button
                type="button"
                onClick={() => handleContent("intro")}
                className={
                  showContent === "intro" ? "info-btn activeBtn" : "info-btn"
                }
              >
                Intro
              </button>
              <button
                type="button"
                onClick={() => handleContent("edu")}
                className={
                  showContent === "edu" ? " info-btn activeBtn" : "info-btn"
                }
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => handleContent("exp")}
                className={
                  showContent === "exp" ? "info-btn activeBtn" : "info-btn"
                }
              >
                Exp
              </button>
            </div>

            <div className="details">
              {showContent === "intro" && (
                <div className="info intro ">
                  <h1>Hi...</h1>
                  <p>
                    I'm a passionate front-end developer dedicated to crafting
                    immersive and intuitive user experiance. with experties in
                    technologies like HTML, CSS, Javascript, React.js, and
                    Redux. I thrive in collaborative environment, leveraging my
                    skills to create responsive and visually appealing web
                    applications. My goal is to continuously learn and adapt to
                    new technologies, ensuring that i deliver innovative
                    solution that delight users.
                  </p>
                </div>
              )}

              {showContent === "edu" && (
                <div className="info edu">
                  <div className="education">
                    <i>
                      <FaUniversity />
                    </i>
                    <div>
                      <h3>Bachelor in computer science</h3>
                      <p>Bamu University</p>
                    </div>
                  </div>

                  <div className="education">
                    <i>
                      {" "}
                      <SiUdemy />
                    </i>

                    <ul>
                      <li>Web Development</li>
                      <li> ReactJs</li>
                    </ul>
                  </div>
                </div>
              )}

              {showContent === "exp" && (
                <div className="info">
                  <h2>Academic Experiance</h2>

                  <ul>
                    <li>
                      {" "}
                      i build some portfolios to show my front-end dev skills
                    </li>
                    <li>i also develop some big application</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
