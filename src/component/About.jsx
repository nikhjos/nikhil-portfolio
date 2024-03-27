import React from "react";
import aboutImg from "../assets/about-img.jpg";
import Title from "./Title";

import Wrapper from "../assets/Wrappers/About";

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
                <h3>B.C.S</h3>
                <p>shivchhatrapati mahavidhyalaya</p>
                <p>Bamu University</p>
              </div>

              <div className="education">
                <h2>Courses</h2>

                <h3>Web Devlopment</h3>
                <p>Udemy</p>
                <h3>React Js</h3>
                <p>Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
