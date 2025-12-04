// src/pages/ProjectDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projectsData';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="section">
        <div className="section__header fade-in">
          <h1 className="section__title">This project does nots exist</h1>
          <p className="section__subtitle">
            Check the adress if it's correct or go back to list of projects.
          </p>
          <Link to="/projects" className="btn btn--primary">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="project-detail fade-in">
        <div className="project-detail__header">
          <Link to="/projects" className="project-detail__back">
            ← All projects
          </Link>
          <h1 className="section__title">{project.title}</h1>
          <p className="project-detail__meta">
            {project.year && <span>{project.year}</span>}
            {project.role && <span> · {project.role}</span>}
          </p>
          {project.technologies && (
            <div className="project-detail__tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {project.heroImage && (
          <div className="project-detail__hero">
            <img
              src={project.heroImage}
              alt={project.title}
              className="project-detail__hero-img"
            />
          </div>
        )}

        {project.description && (
          <div className="project-detail__text">
            <h2>Project description</h2>
            <p>{project.description}</p>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="project-detail__gallery">
            <h2>Gallery</h2>
            {project.gallery.map((src, index) => (
              <figure key={src} className="project-detail__gallery-item">
                <img src={src} alt={`${project.title} – widok ${index + 1}`} />
              </figure>
            ))}
          </div>
        )}

        {(
          (project.youtubeIds && project.youtubeIds.length > 0) ||
          (project.videoSrcs && project.videoSrcs.length > 0) ||
          project.pdfSrc
        ) && (
          <div className="project-detail__media">
            {/* YouTube – jeden tytuł, wiele filmów */}
            {project.youtubeIds && project.youtubeIds.length > 0 && (
              <div className="project-detail__video-group">
                <h2>YouTube</h2>
                <div className="project-detail__video-list">
                  {project.youtubeIds.map((ytId, index) => (
                    <div className="project-detail__video" key={`yt-${ytId}-${index}`}>
                      <div className="project-detail__video-frame">
                        <iframe
                          src={`https://www.youtube.com/embed/${ytId}`}
                          title={`${project.title} – demo ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lokalne wideo – jeden tytuł, wiele plików */}
            {project.videoSrcs && project.videoSrcs.length > 0 && (
              <div className="project-detail__video-group">
                <h2>Video</h2>
                <div className="project-detail__video-list">
                  {project.videoSrcs.map((src, index) => (
                    <div className="project-detail__video" key={`file-${index}`}>
                      <video controls className="project-detail__video-player">
                        <source src={src} type="video/mp4" />
                        Your browser does not support video player.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PDF jak wcześniej */}
            {project.pdfSrc && (
              <div className="project-detail__pdf">
                <h2>Documentation (PDF)</h2>
                <div className="project-detail__pdf-frame">
                  <iframe
                    src={project.pdfSrc}
                    title={`${project.title} – dokumentacja PDF`}
                    className="project-detail__pdf-iframe"
                  />
                </div>
                <a
                  href={project.pdfSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  Open PDF in new page
                </a>
              </div>
            )}
          </div>
        )}
        {(project.githubUrl || project.liveUrl) && (
          <div className="project-detail__links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Check working version
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                Check code in Github
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
