import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <Link to="/demo">
        <button className="p-1 m-2 bg-gray-300 w-36 rounded-md">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
