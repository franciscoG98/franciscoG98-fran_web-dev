import React from "react";
import "./terminalStyles.css";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCode } from "react-icons/ai";
import mock from "./mock";

const Terminal = ({ title, bash }) => {
  return (
    <div className="container">
      <div className="terminal-container">
        <Row className="terminal-header">
          <Col sm={1}></Col>
          <Col sm={10}>
            <AiOutlineCode className="terminal-icon" size={22} />
            {title}
          </Col>
          <Col sm={1}></Col>
        </Row>

        {/* user side */}

        {/* line 1 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={8} className=" line1 terminal-text">
            {mock[0]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>

        {/* line 2 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={8} className="line2 terminal-text">
            {mock[1]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>

        {/* line 3 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={8} className="line3 terminal-text">
            {mock[2]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>

        {/* line 4 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={8} className="line4 terminal-text">
            {mock[3]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>

        {/* line 5 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={8} className="line5 terminal-text">
            {mock[4]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Terminal;
