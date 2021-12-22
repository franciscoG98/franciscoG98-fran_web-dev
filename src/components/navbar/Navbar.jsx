import React from "react";
import { NavLink } from "react-router-dom";

import "./navbarStyles.css";
import {
  AiOutlineHome,
  AiOutlineBook,
  // AiOutlineSchedule,
  AiOutlineCode,
  AiOutlineLaptop,
  // AiOutlineMessage,
} from "react-icons/ai";
import {
  MdOutlineMessage
} from "react-icons/md";


export default function Navbar() {
  return (
      <div className="navbar-container">
        <nav>
          <NavLink className='navbar-link' activeclassname="active" exact to="/">
            <AiOutlineHome size={20}/>
            Home
          </NavLink>
          
          <NavLink className='navbar-link' activeclassname="active" to="/skills">
            <AiOutlineCode size={20}/>
            Skills
          </NavLink>

          <NavLink className='navbar-link' activeclassname="active" to="/about">
            {/* <AiOutlineSchedule size={20}/> */}
            <AiOutlineBook size={20}/>

            About
          </NavLink>

          <NavLink className='navbar-link' activeclassname="active" to="/work">
            <AiOutlineLaptop size={20}/>
            Work
          </NavLink>
          
          <NavLink className='navbar-link' activeclassname="active" to="/contact">
            <MdOutlineMessage size={20}/>
            Contact me
          </NavLink>
          
        </nav>
      </div>
  );
}
