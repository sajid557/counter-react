import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <h1>this is about page</h1>
      <Link to="/about/:id">innerAbout</Link>
    </div>
  );
};
export default About;
