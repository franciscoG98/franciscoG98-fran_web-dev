import React from "react";
import "./navbarStyles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="navbar-link" to="/home">
        Home
      </Link>
      <Link className="navbar-link" to="/education">
        Education
      </Link>
      <Link className="navbar-link" to="/work">
        Work
      </Link>
      <Link className="navbar-link" to="/skills">
        Skills
      </Link>
      <Link className="navbar-link" to="/contact-me">
        Contact me
      </Link>
    </nav>
  );
};

export default Navbar;
