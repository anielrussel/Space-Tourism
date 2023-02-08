import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const [activeLink, setActiveLink] = useState(
    location.pathname === "/" ? "home" : ""
  );

  return (
    <nav>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <hr />
      <motion.div
        className="navbar-links"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <ul>
          <Link
            to="/"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => setActiveLink("home")}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="hvr-underline-from-left">
              <span>00</span>HOME
            </li>
          </Link>
          <Link
            to={"/destination"}
            className={activeLink === "destination" ? "active" : ""}
            onClick={() => setActiveLink("destination")}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="hvr-underline-from-left">
              <span>01</span>DESTINATION
            </li>
          </Link>
          <Link
            to="/crew"
            className={activeLink === "crew" ? "active" : ""}
            onClick={() => setActiveLink("crew")}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="hvr-underline-from-left">
              <span>02</span>CREW
            </li>
          </Link>
          <Link
            to="/technology"
            className={activeLink === "technology" ? "active" : ""}
            onClick={() => setActiveLink("technology")}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="hvr-underline-from-left">
              <span>03</span>TECHNOLOGY
            </li>
          </Link>
        </ul>
      </motion.div>
      <div className="navbar-menu">
        {toggle ? (
          <img src={iconClose} onClick={() => setToggle(false)} />
        ) : (
          <img src={hamburger} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="menu-container">
            <div className="menu-links">
              <ul>
                <Link
                  to="/"
                  className={activeLink === "home" ? "active" : ""}
                  onClick={() => setActiveLink("home")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span>00</span>HOME
                  </li>
                </Link>
                <Link
                  to={"/destination"}
                  className={activeLink === "destination" ? "active" : ""}
                  onClick={() => setActiveLink("destination")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span>01</span>DESTINATION
                  </li>
                </Link>
                <Link
                  to="/crew"
                  className={activeLink === "crew" ? "active" : ""}
                  onClick={() => setActiveLink("crew")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span>02</span>CREW
                  </li>
                </Link>
                <Link
                  to="/technology"
                  className={activeLink === "technology" ? "active" : ""}
                  onClick={() => setActiveLink("technology")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span>03</span>TECHNOLOGY
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
