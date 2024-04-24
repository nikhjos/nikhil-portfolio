import React from "react";
import { portfolioList } from "../assets/Data";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="project">
      <div className="project-center">
        {portfolioList.map((item) => {
          const { id, img, href, githref, github, website, title, desc } = item;
          return (
            <article key={id} className="singleProject">
              <img src={img} alt="image" />
              <div className="projectDetails">
                <div>
                  <h3>{title} </h3>
                  <p>{desc} </p>
                </div>

                <div className="btn-container">
                  <Link
                    to={href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                  >
                    {website}
                  </Link>
                  <Link
                    to={githref}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                  >
                    {github}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Link to="/" className="homeBtn">
        <FaHome />
        <p>Back To Home</p>
      </Link>
    </section>
  );
};

export default Projects;
