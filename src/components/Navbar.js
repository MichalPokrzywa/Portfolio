// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo-circle">MP</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Michał Pokrzywa</span>
            <span className="navbar__brand-role">Programmer</span>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Przełącz menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end className="navbar__link" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__link" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink to="/projects" className="navbar__link" onClick={handleLinkClick}>
            Projects
          </NavLink>
          <NavLink to="/skills" className="navbar__link" onClick={handleLinkClick}>
            Skills
          </NavLink>
          <NavLink to="/experience" className="navbar__link" onClick={handleLinkClick}>
            Experience
          </NavLink>
          <NavLink to="/contact" className="navbar__link" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
