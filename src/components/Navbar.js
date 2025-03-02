import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './styles/Navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsNavOpen(false); // Close the nav on link click
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li className="brand">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            A.A.Kalainilavan
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="main-info"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
