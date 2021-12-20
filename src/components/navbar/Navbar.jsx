import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink className='navbar-link' activeClassName="active" exact to="/">
            <AiOutlineHome />
            Home
          </NavLink>
          
          <NavLink className='navbar-link' activeClassName="active" to="/skills">
            <AiOutlineCode />
            Skills
          </NavLink>

          <NavLink className='navbar-link' activeClassName="active" to="/about">
            <AiOutlineBook />
            About
          </NavLink>

          <NavLink className='navbar-link' activeClassName="active" to="/work">
            <AiOutlineLaptop />
            Work
          </NavLink>
          
          <NavLink className='navbar-link' activeClassName="active" to="/contact">
            <AiOutlineLaptop />
            Contact me
          </NavLink>
          
        </nav>
      </div>
  );
}
