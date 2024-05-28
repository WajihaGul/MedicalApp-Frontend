import React from "react";
import "./Button.css"
const Button = ({ title }) => {
  return (
    <div>
      <button className="button">
        {title}
      </button>
    </div>
  );
};

export default Button;
