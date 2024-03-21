import React from "react";
import { navlinks } from "../assets/Data";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div className="sidebar">
      <button type="button" onClick={() => setSidebar(false)}>
        <FaTimes className="fatimes" />
      </button>
      {navlinks.map((link) => {
        const { id, href, text } = link;
        return (
          <a key={id} href={href} onClick={() => setSidebar(false)}>
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
