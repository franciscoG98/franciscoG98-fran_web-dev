import React from "react";
import "./skillsStyles.css";
import { Col, Row } from "react-bootstrap";

// front icons
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiCss3,
  SiMaterialui,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";

// back icons
import {
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiMariadbfoundation,
} from "react-icons/si";

// other icons
import { FaLinux, FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiScrum } from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills-container">
      {/* front section */}
      <br />
      <h4 className="skills-title">front end</h4>
      <br />
      <Row className="skills-front">
        <Col>
          <AiOutlineHtml5 size={55} className="skill-icon" />
          <span className="skill-span">Html</span>
        </Col>

        <Col>
          <SiCss3 size={55} className="skill-icon" />
          <span className="skill-span">Css</span>
        </Col>

        <Col>
          <SiJavascript size={55} className="skill-icon" />
          <span className="skill-span">Javascript</span>
        </Col>

        <Col>
          <SiReact size={55} className="skill-icon" />
          <span className="skill-span">React</span>
        </Col>

        <Col>
          <SiRedux size={55} className="skill-icon" />
          <span className="skill-span">Redux</span>
        </Col>

        <Col>
          <SiMaterialui size={55} className="skill-icon" />
          <span className="skill-span">Material UI</span>
        </Col>

        <Col>
          <BsBootstrapFill size={55} className="skill-icon" />
          <span className="skill-span">Bootstrap</span>
        </Col>

        <Col>
          <FaSass size={55} className="skill-icon" />
          <span className="skill-span">Sass</span>
        </Col>
      </Row>

      <br />
      {/* back section */}
      <h4 className="skills-title">back end</h4>
      <br />
      <Row className="skills-back">
        <Col>
          <SiNodedotjs size={55} className="skill-icon" />
          <span className="skill-span">NodeJS</span>
        </Col>

        <Col>
          <SiExpress size={55} className="skill-icon" />
          <span className="skill-span">Express</span>
        </Col>

        <Col>
          <SiSqlite size={55} className="skill-icon" />
          <span className="skill-span">SQLite</span>
        </Col>

        <Col>
          <SiPostgresql size={55} className="skill-icon" />
          <span className="skill-span">PostgreSQL</span>
        </Col>

        <Col>
          <SiMongodb size={55} className="skill-icon" />
          <span className="skill-span">MongoDB</span>
        </Col>

        <Col>
          <SiMariadbfoundation size={55} className="skill-icon" />
          <span className="skill-span">MariaDB</span>
        </Col>
      </Row>

      <br />
      {/* other section */}
      <h4 className="skills-title">Other</h4>
      <br />
      <Row className="skills-other">
        <Col>
          <FaLinux size={55} className="skill-icon" />
          <br />
          <span className="skill-span">Linux</span>
        </Col>

        <Col>
          <SiPostman size={55} className="skill-icon" />
          <br />
          <span className="skill-span">Postman</span>
        </Col>

        <Col>
          <DiScrum size={55} className="skill-icon" />
          <br />
          <span className="skill-span">Scrum&nbsp;methodology</span>
        </Col>

        <Col>
          <FaGithub size={55} className="skill-icon" />
          <br />
          <span className="skill-span">Github</span>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
