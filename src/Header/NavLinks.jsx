import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li className="nav-li">
        <NavLink to="/" exact="true">
         Home
        </NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/login">Subscriber Login</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/case-studies">Case Studies</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
