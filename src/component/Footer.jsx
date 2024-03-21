import React from "react";
import { socialLinks } from "../assets/Data";
import Wrapper from "../assets/Wrappers/Footer";

const Footer = () => {
  return (
    <section>
      <div id="footer">
        <div className="footer-center">
          <h3>connect with me </h3>

          <div className="footer-links">
            {socialLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <a key={id} href={href}>
                  {text}{" "}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
