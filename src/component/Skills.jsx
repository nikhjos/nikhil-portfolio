import React from "react";
import { serviceList, skills } from "../assets/Data";
import Title from "./Title";

const Skill = () => {
  return (
    <section id="service">
      <div className="service-center">
        <div className="service-info">
          <div className="title">
            <Title name="Services" size="3rem" weight="900" family="anta" />
          </div>
          <div className="services">
            {serviceList.map((service) => {
              const { id, icon, name, text } = service;
              return (
                <article key={id}>
                  <i>{icon} </i>
                  <h4>{name} </h4>
                  <p>{text} </p>
                </article>
              );
            })}
          </div>
        </div>
        <div>
          <div className="title">
            <Title name="Skills" size="3rem" weight="900" family="anta" />
          </div>

          <div className="skill">
            {skills.map((skill) => {
              const { id, text, icon } = skill;
              return (
                <article key={id}>
                  <i>{icon} </i>
                  <h3>{text} </h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
