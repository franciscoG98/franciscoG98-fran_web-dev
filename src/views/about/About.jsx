import React from "react";
import "./aboutStyles.css";
import Card from "../../components/card"

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        what the hell would u wanna know fella, i'm just a copy paster. I like
        money and I think web developing can give me a lot of that
        <Card />
      </p>
    </div>
  );
};

export default About;
