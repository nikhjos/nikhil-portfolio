import React from "react";

import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            {" "}
            I'm a passionate front-end developer dedicated to crafting immersive
            and intuitive user experiance. with experties in technologies like
            HTML, CSS, Javascript, React.js, and Redux. I thrive in
            collaborative environment, leveraging my skills to create responsive
            and visually appealing web applications. My goal is to continuously
            learn and adapt to new technologies, ensuring that i deliver
            innovative solution that delight users.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
