import React from "react";
import { portfolioList } from "../assets/Data";
import Title from "./Title";
import Wrapper from "../assets/Wrappers/Portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolios = portfolioList.filter((item) => item.feature);
  return (
    <section>
      <div id="portfolios">
        <div className="title">
          <Title name="My Projects" />
        </div>

        <div className="portfolio-center">
          <div className="projects">
            {portfolios.map((item) => {
              const { id, img, href, githref, github, website, title, desc } =
                item;
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

          <Link to="/projects" className="seeMore">
            see more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
