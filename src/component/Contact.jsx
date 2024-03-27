import React from "react";
import { contactList } from "../assets/Data";
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
            {contactList.map((contact) => {
              const { id, icon, name, text, style } = contact;
              return (
                <div key={id} className="info">
                  <i>{icon} </i>

                  <p>{text} </p>
                </div>
              );
            })}
          </div>

          <div className="contact-form">
            <div className="sub-heading">
              <Title name="Email Me" size="1.5rem" />
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
      </div>
    </section>
  );
};

export default Contact;
