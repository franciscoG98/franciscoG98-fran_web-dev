import React from "react";
import { Link } from "react-router-dom";

import "./navbarStyles.css";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineCode,
  AiOutlineLaptop,
} from "react-icons/ai";

export default function Navbar() {
  return (
      <div className="navbar-container">
        <nav>
          <Link className='navbar-link' activeClassName="active" exact to="/">
            <AiOutlineHome />
            Home
          </Link>
          <Link className='navbar-link' activeClassName="active" to="/education">
            <AiOutlineBook />
            Educaction
          </Link>
          <Link className='navbar-link' activeClassName="active" to="/skills">
            <AiOutlineCode />
            Skills
          </Link>
          <Link className='navbar-link' activeClassName="active" to="/contact">
            <AiOutlineLaptop />
            Contact me
          </Link>
        </nav>
      </div>
  );
}
