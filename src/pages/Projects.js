// src/pages/Projects.js
import React from 'react';
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">Projects</h1>
        <p className="section__subtitle">
          What I have been working on
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
