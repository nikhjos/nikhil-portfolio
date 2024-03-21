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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                eligendi praesentium deleniti dolorem, mollitia libero facere
                ratione, ut pariatur maiores vitae perferendis recusandae, optio
                a dignissimos quidem iste dolore nulla vel voluptates atque.
                Deserunt ratione obcaecati qui, officiis iusto magnam, nam quis
                reiciendis corrupti quo asperiores voluptas totam corporis
                dicta.
              </p>
            </div>

            <div className="edu-info">
              <div className="education">
                <h2>Education</h2>
                <div>
                  <h3>B.C.S</h3>
                  <p>shivchhatrapati mahavidhyalaya</p>
                  <p>Bamu University</p>
                </div>
              </div>

              <div className="education">
                <h2>Courses</h2>
                <div>
                  <h3>Web Devlopment</h3>

                  <p>Udemy</p>
                  <h3>React Js</h3>

                  <p>Udemy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
