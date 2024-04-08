import React from "react";
import { skills } from "../assets/Data";
import Title from "./Title";

const Skill = () => {
  return (
    <section>
      <div id="skills">
        <div className="title">
          <Title name="Skills" size="3rem" weight="900" family="anta" />
        </div>
        <div className="skill-center">
          {skills.map((skill) => {
            const { id, text, icon } = skill;
            return (
              <article key={id} className="skill">
                <i>{icon} </i>
                <h3>{text} </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
