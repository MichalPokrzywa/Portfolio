// src/pages/Experience.js
import React from 'react';

const cvUrl = `${process.env.PUBLIC_URL}/docs/cv(7).pdf`;

export default function Experience() {
  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">Experience</h1>
        <p className="section__subtitle">
          Here you will find my CV.
        </p>
      </div>

      <div className="experience-card fade-in">
        <div className="experience-card__frame">
          <iframe
            src={cvUrl}
            title="CV"
            className="experience-card__iframe"
          />
        </div>

        <a href={cvUrl} download className="btn btn--ghost" style={{ marginTop: '16px' }}>
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
