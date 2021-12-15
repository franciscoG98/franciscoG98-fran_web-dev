import React from "react";
import "./terminalStyles.css";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCode } from "react-icons/ai";

const Terminal = ({ title, bash, text }) => {
  return (
    <div className="container">
      <div className="terminal-container">
        <Row className="terminal-header">
          <Col></Col>
          <Col>
            <AiOutlineCode className="terminal-icon" size={22} />
            {title}
          </Col>
          <Col></Col>
        </Row>

        <Row className="user-side">
          
          <Col sm={2} md={5} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col sm={2} className="cursor">
            {/* aca va a ir la intro */}
            {/* {text} */}
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Terminal;
