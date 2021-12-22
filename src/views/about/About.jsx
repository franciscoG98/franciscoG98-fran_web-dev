import React from "react";
import "./aboutStyles.css";
import Card from "../../components/card";

const text =
  "what the hell would u wanna know fella, i'm just a copy paster. I like money and I think web developing can give me a lot of that";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <Card title={"something about me and my shitty life"} content={text} />
    </div>
  );
};

export default About;
