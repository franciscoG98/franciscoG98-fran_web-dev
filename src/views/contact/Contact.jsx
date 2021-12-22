import React from "react";
import "./contactStyles.css";
import Card from "../../components/card";
import { Col, Row } from "react-bootstrap";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineCodepen,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contactme-container">
      <Row className="contactme-row">
        <Col>
          <Card title="linkedin" content={"link to my linkedin"} />
          <AiOutlineLinkedin size={70} />
        </Col>
        <Col>
          <Card title="github" content={"link to my github"} />
          <AiOutlineGithub size={70} />
        </Col>
      </Row>
<br />

      <Row>
        <Col>
          <Card title="mail" content={"link to my mail"} />
          <AiOutlineMail size={70} />
        </Col>
        <Col>
          <Card title="codepen" content={"link to my codepen"} />
          <AiOutlineCodepen size={70} />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
