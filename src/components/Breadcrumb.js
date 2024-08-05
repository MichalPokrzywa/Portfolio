import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ path }) {
  return (
    <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
      <Link to="/">MichalPokrzywa</Link> / <Link to={path === "home" ? "/home" : "/"}>{path === "home" ? "home" : "Portfolio"}</Link>
    </div>
  );
}