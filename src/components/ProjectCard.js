// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card fade-in">
      <div className="project-card__thumb-wrapper">
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-card__thumb"
            loading="lazy"
          />
        )}
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__meta">
          {project.year && <span>{project.year}</span>}
          {project.role && <span> · {project.role}</span>}
        </p>
        <p className="project-card__excerpt">{project.shortDescription}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="project-card__tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-card__actions">
          <Link to={`/projects/${project.id}`} className="btn btn--primary">
            Check Project
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
