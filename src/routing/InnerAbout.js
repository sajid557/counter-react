import React from "react";
import { Link } from "react-router-dom";

const InnerAbout = () => {
  return (
    <div>
      <h1>this is InnerAbout page</h1>
      <h2>
        <Link to="./about/:detail">more in</Link>
      </h2>
    </div>
  );
};
export default InnerAbout;
