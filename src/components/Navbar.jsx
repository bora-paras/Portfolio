// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/education" onClick={() => setIsMenuOpen(false)}>
          Education
        </Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/skills" onClick={() => setIsMenuOpen(false)}>
          Skills
        </Link>
        <Link to="/certificates" onClick={() => setIsMenuOpen(false)}>
          Certificates
        </Link>
        <Link to="/extraCurricular" onClick={() => setIsMenuOpen(false)}>
          ExtraCurricular
        </Link>
        <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
          Resume
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
