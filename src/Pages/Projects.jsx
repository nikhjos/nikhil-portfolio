import React from "react";
import { portfolioList } from "../assets/Data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="project">
      <div className="project-center">
        {portfolioList.map((item) => {
          const { id, img, href, githref, github, website } = item;
          return (
            <article key={id} className="singleProject">
              <img src={img} alt="image" />
              <div className="btn-container">
                <a href={href}>{github}</a>
                <a href={githref}>{website}</a>
              </div>
            </article>
          );
        })}
      </div>

      <Link to="/" className="homeBtn">
        Back to Home
      </Link>
    </section>
  );
};

export default Projects;
