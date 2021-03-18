import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // for hamberger menu
  const handleClick = () => {
    setClick(!click);
  };

  // for navigation menu
  const closeMobileMenu = () => {
    setClick(false);
  };

  // depends on window's width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NEO's<i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/goals" className="nav-links" onClick={closeMobileMenu}>
                Goals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-links-mobile" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Projects</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
