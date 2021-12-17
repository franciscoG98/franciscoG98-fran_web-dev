import React from "react";
import "./terminalStyles.css";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCode } from "react-icons/ai";
import mock from "./mock";

const Terminal = ({ title, bash, text }) => {
  console.log("mock:\n", mock);
  console.log("mock 0 :\n", mock[0]);

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
          <Col md={7} className=" terminal-text">
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
          <Col md={7} className=" terminal-text">
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
          <Col md={7} className=" terminal-text">
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
          <Col md={7} className=" terminal-text">
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
          <Col md={7} className=" terminal-text">
            {mock[4]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>

        {/* line 6 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={7} className=" terminal-text">
            {mock[5]}
          </Col>
          <Col md={1} className="cursor">
            &nbsp;
          </Col>
        </Row>
        
        {/* line 7 */}
        <Row className="user-side">
          <Col md={3} className="terminal-bash">
            {bash}
          </Col>
          &nbsp;
          <Col md={7} className=" terminal-text">
            {mock[6]}
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
