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
              const { id, img, href, githref, github, website } = item;
              return (
                <article key={id} className="singleProject">
                  <img src={img} alt="image" />
                  <div className="btn-container">
                    <Link to={href} target="_blank" rel="noreferrer">
                      {github}
                    </Link>
                    <Link to={githref} target="_blank" rel="noreferrer">
                      {website}
                    </Link>
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
