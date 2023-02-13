import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarStyles.css";
import {
    AiOutlineHome,
    AiOutlineBook,
    AiOutlineCode,
    AiOutlineLaptop,
} from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <NavLink
                className="navbar-link"
                activeclassname="active"
                exact="true"
                to="/"
            >
                <AiOutlineHome size={20} />
                Home
            </NavLink>

            <NavLink
                className="navbar-link"
                activeclassname="active"
                to="/skills"
            >
                <AiOutlineCode size={20} />
                Skills
            </NavLink>

            <NavLink
                className="navbar-link"
                activeclassname="active"
                to="/about"
            >
                <AiOutlineBook size={20} />
                About
            </NavLink>

            <NavLink
                className="navbar-link"
                activeclassname="active"
                to="/work"
            >
                <AiOutlineLaptop size={20} />
                Work
            </NavLink>

            <NavLink
                className="navbar-link"
                activeclassname="active"
                to="/contact"
            >
                <MdOutlineMessage size={20} />
                Contact me
            </NavLink>
        </nav>
    );
}
