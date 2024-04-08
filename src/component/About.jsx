import React from "react";
import aboutImg from "../assets/about-img.jpg";
import Title from "./Title";

import Wrapper from "../assets/Wrappers/About";
import { MdCastForEducation } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <div id="about">
        <div className="title">
          <Title name="About Me" size="3rem" weight="900" family="anta" />
        </div>

        <div className="about-center">
          .
          <div className="aboutImg">
            <img src={aboutImg} alt="image" />
          </div>
          <div className="aboutInfo">
            <div>
              <p className="myself">
                I'm a passionate front-end developer dedicated to crafting
                immersive and intuitive user experiance. with experties in
                technologies like HTML, CSS, Javascript, React.js, and Redux. I
                thrive in collaborative environment, leveraging my skills to
                create responsive and visually appealing web applications. My
                goal is to continuously learn and adapt to new technologies,
                ensuring that i deliver innovative solution that delight users.
              </p>
            </div>

            <div className="edu-info">
              <div className="education">
                <h2>Education</h2>

                <div>
                  <h3>
                    <i>
                      <MdCastForEducation />
                    </i>
                    Bachelor in computer science
                  </h3>
                  <p>
                    <i>
                      <FaUniversity />
                    </i>
                    Bamu University
                  </p>
                </div>
              </div>

              <div className="education">
                <h2>Udemy Courses</h2>

                <ul>
                  <li>Web Development</li>
                  <li> ReactJs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
