import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="logo">MS NATIONAL SOFTWARE TRAINING INSTITUTE </div>

      <div className="display-menu">
        <Link className="menu" to={"/"}>
          Home
        </Link>
        <Link className="menu" to={"/about"}>
          About
        </Link>
        <Link className="menu" to={"/courses"}>
          <select>
            <option>Course</option>
            <option>Mern Stack Development</option>
            <option>Mean Stack Development</option>
            <option>Php full Stack Development</option>
            <option>Asp .net web Development</option>
          </select>
        </Link>
        <Link className="menu" to={"/contact"}>
          Contact
        </Link>
        <Link className="menu" to={"/login"}>
          Login
        </Link>
        <Link className="menu" to={"/register"}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
