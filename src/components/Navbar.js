import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Portfolio/">Home</Link></li>
        <li><Link to="/Portfolio/about">About</Link></li>
        <li><Link to="/Portfolio/projects">Projects</Link></li>
        <li><Link to="/Portfolio/skills">Skills</Link></li>
        <li><Link to="/Portfolio/testimonials">Testimonials</Link></li>
        <li><Link to="/Portfolio/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}