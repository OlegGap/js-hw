import React from "react";
import './button.css'

const Button = ({ type, label, onClick = () => null }) => {
  return (
    <button className="Button" type={type} onClick={onClick} >
      {label}
    </button>
  );
};

export default Button;
