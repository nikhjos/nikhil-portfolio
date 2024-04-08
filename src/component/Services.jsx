import React from "react";
import Title from "./Title";

import { serviceList } from "../assets/Data";
const Services = () => {
  return (
    <section>
      <div id="services">
        <div className="title">
          <Title name="Services" size="3rem" weight="900" family="anta" />
        </div>
        <div className="service-center">
          {serviceList.map((service) => {
            const { id, icon, name, text } = service;
            return (
              <article key={id} className="service">
                <i>{icon} </i>
                <h2>{name} </h2>
                <p>{text} </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
