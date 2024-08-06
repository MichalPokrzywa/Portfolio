// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Portfolio">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
