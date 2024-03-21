import React, { useState } from "react";
import { navlinks } from "../assets/Data";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/Navbar";
import Sidebar from "./Sidebar";

const Navbar = ({ theme, toggleTheme }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <section>
      <div className="navbar">
        <div className="navbar-center">
          <div className="logo">
            <h2>NJ</h2>
          </div>

          <div className="navlinks">
            {/* update to navlinks after router install */}

            {navlinks.map((link) => {
              const { id, href, text } = link;
              return (
                <a key={id} href={href}>
                  {text}
                </a>
              );
            })}
          </div>

          <div className="theme-bars">
            <div className="theme">
              <button type="button" onClick={toggleTheme}>
                {theme ? (
                  <FaSun className="sun" />
                ) : (
                  <FaMoon className="moon" />
                )}
              </button>
            </div>

            <div className="bars">
              <button type="button" onClick={() => setSidebar(true)}>
                <FaBars />{" "}
              </button>

              {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
