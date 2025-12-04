// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero fade-in">
      <div className="hero__content">
        <p className="hero__eyebrow">Hi, i am</p>
        <h1 className="hero__title">Michał Pokrzywa</h1>
        <p className="hero__subtitle">
          Programmer which loves creating new things.
        </p>

        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">
            Check my projects
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Contact me!
          </Link>
        </div>

        <div className="hero__meta">
          <span className="pill">C#</span>
          <span className="pill">Python</span>
          <span className="pill">Graphics Programmer</span>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__avatar">
          <img
            src={`${process.env.PUBLIC_URL}/img/Profile.jpg`}
            alt="Moje zdjęcie"
            className="hero__avatar-img"
          />
        </div>
        <div className="hero__orbit" />
      </div>
    </section>
  );
}