import React from "react";
import "./contactStyles.css";
import { Container, Col, Row } from "react-bootstrap";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineCodepen,
} from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const Contact = () => {
  return (
    <Container fluid>
      <Row className="contactme-container">
        {/* Linkedin */}
        <Col xs={12} sm={6} md={6} lg={6} className="contactme-box">
          <h3 className="contacte-title">Linkedin</h3>
          <hr />
          <AiOutlineLinkedin size={70} />
          <hr />
          <a
            href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-lnk"
          >
            Linkedin
          </a>
        </Col>

        {/* Github */}
        <Col xs={12} sm={6} md={6} lg={6} className="contactme-box">
          <h3 className="contacte-title">Github</h3>
          <hr />
          <AiOutlineGithub size={70} />
          <hr />
          <a
            href="https://github.com/franciscoG98/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-lnk"
          >
            Github
          </a>
        </Col>
      </Row>

      <Row className="contactme-container">
        {/* Mail */}
        <Col xs={12} sm={6} md={6} lg={6} className="contactme-box">
          <h3 className="contacte-title">Mail</h3>
          <hr />
          <AiOutlineMail size={70} />
          <hr />

          <span className="contact-lnk">franciscodev98@gmail.com</span>
        </Col>
        {/* CodePen */}
        <Col xs={12} sm={6} md={6} lg={6} className="contactme-box">
          <h3 className="contacte-title">CodePen</h3>
          <hr />
          <AiOutlineCodepen size={70} />
          <hr />
          <a
            href="https://codepen.io/franciscog98"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-lnk"
          >
            CodePen
          </a>
        </Col>
      </Row>

      {/* old portfolio */}
      <Row className="contactme-container">
        <Col xs={12} sm={6} md="6" lg={6} className="contactme-box">
          <h3 className="contacte-title">Portfolio-v1</h3>
          <hr />
          <RiPagesLine size={70} />
          <hr />
          <a
            href="https://franciscog98.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-lnk"
          >
            Portfolio
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
