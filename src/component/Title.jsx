import React from "react";

const Title = ({ name, size, weight, family }) => {
  return (
    <div
      style={{
        fontSize: size || "3rem",
        fontWeight: weight || "900",
        fontFamily: family || "anta",
      }}
    >
      {name}{" "}
    </div>
  );
};

export default Title;
