// src/pages/Projects.js
import React from 'react';
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

// najnowsze na górze; przedziały typu "2024-2025" liczą się jak ich późniejszy rok
const latestYear = (year) => {
  const matches = String(year || '').match(/\d{4}/g);
  return matches ? Math.max(...matches.map(Number)) : 0;
};

const sortedProjects = [...projects].sort(
  (a, b) => latestYear(b.year) - latestYear(a.year)
);

export default function Projects() {
  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">Projects</h1>
        <p className="section__subtitle">
          What I have been working on — newest first
        </p>
      </div>

      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
