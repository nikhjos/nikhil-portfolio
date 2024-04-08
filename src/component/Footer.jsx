import React from "react";
import { contactList } from "../assets/Data";
import Wrapper from "../assets/Wrappers/Footer";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-center">
        {contactList.map((link) => {
          const { id, icon, name, text, style } = link;
          return (
            <article key={id}>
              <i>{icon} </i>
              <p>{text} </p> ||
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
