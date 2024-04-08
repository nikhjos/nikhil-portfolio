import React from "react";
import { socialLinks } from "../assets/Data";
import Title from "./Title";
import Wrapper from "../assets/Wrappers/Contact";

const Contact = () => {
  return (
    <section>
      <div id="contact">
        <div className="title">
          <Title name="contact" />
        </div>

        <div className="contact-center">
          <div className="contact-info">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <a key={id} href={href} className="info" target="_blank">
                  {icon}
                </a>
              );
            })}
          </div>
          <form>
            <div>
              <label htmlFor="name">name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">mesage</label>
              <textarea name="message" id="message"></textarea>
            </div>

            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
