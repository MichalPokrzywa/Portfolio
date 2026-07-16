// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiOpengl,
  SiOpencv,
  SiPycharm,
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiOpenai,
  SiPytorch,
} from 'react-icons/si';
import { FaAws, FaJava, FaShieldVirus } from 'react-icons/fa';
import { TbBrandCSharp, TbCode, TbDatabase, TbCube } from 'react-icons/tb';
import { RiGeminiLine } from 'react-icons/ri';
import { DiVisualstudio } from 'react-icons/di';
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const skills = [
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'HLSL', icon: TbCode },
  { name: 'SQL', icon: TbDatabase },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Git', icon: SiGit },
  { name: 'Visual Studio', icon: DiVisualstudio },
  { name: 'Unity', icon: SiUnity },
  { name: 'Unreal Engine', icon: SiUnrealengine },
  { name: 'Blender', icon: SiBlender },
  { name: 'PBRT-V4', icon: TbCube },
  { name: 'PyCharm', icon: SiPycharm },
  { name: 'OpenGL', icon: SiOpengl },
  { name: 'OpenCV', icon: SiOpencv },
  { name: 'Pytorch', icon: SiPytorch },
  { name: 'ESET', icon: FaShieldVirus },
  { name: 'Postgres', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Gemini', icon: RiGeminiLine },
  { name: 'ChatGPT', icon: SiOpenai },
  { name: 'AWS', icon: FaAws },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3 / SCSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
];

// na głównej pokazujemy projekty oznaczone `featured: true` w projectsData.js
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

const expStats = [
  { value: '6+', label: 'Programming experience' },
  { value: '4+', label: 'Creating games' },
  { value: '6', label: 'Competition awards' },
  { value: '2', label: 'Titles shipped on Steam' },
];

export default function Home() {
  return (
    <>
      <section className="hero fade-in">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I am</p>
          <h1 className="hero__title">
            <span>Michał</span>
            <span>Pokrzywa</span>
          </h1>
          <p className="hero__subtitle">
            Programmer who loves creating new things — games, tools and
            interactive 3D experiences.
          </p>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              Check my projects
            </Link>
            <Link to="/experience" className="btn btn--ghost">
              My experience
            </Link>
          </div>

          <div className="hero__meta">
            <span className="pill">Unity Developer</span>
            <span className="pill">Computer Graphics Programmer</span>
            <Link to="/contact" className="hero__contact-link">
              Contact me →
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar">
            <img
              src={`${process.env.PUBLIC_URL}/img/Profile.jpg`}
              alt="Profile"
              className="hero__avatar-img"
            />
          </div>
          <div className="hero__orbit" />
        </div>
      </section>

      <section className="section">
        <div className="section__header section__header--row fade-in">
          <div>
            <h2 className="section__title">Featured projects</h2>
            <p className="section__subtitle">
              Shipped games and the things I am most proud of.
            </p>
          </div>
          <Link to="/projects" className="link-arrow">
            All projects →
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="home-exp fade-in">
          <div>
            <p className="home-exp__eyebrow">Experience</p>
            <h2 className="home-exp__title">
              Programmer, Designer, Developer
            </h2>
            <p className="home-exp__desc">
              Work with various companies, a master’s degree in Interactive 3D Graphics and
              a variety of side activities — see the whole journey drawn to
              scale on an interactive timeline.
            </p>
            <Link to="/experience" className="btn btn--primary">
              View the timeline
            </Link>
          </div>
          <div className="home-exp__stats">
            {expStats.map((stat) => (
              <div key={stat.label}>
                <div className="home-exp__stat-value">{stat.value}</div>
                <div className="home-exp__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="home-about fade-in">
          <div className="home-about__image">
            <img
              src={`${process.env.PUBLIC_URL}/img/about1.jpg`}
              alt="Michał Pokrzywa"
              loading="lazy"
            />
          </div>
          <div className="home-about__text">
            <h2>Who am I</h2>
            <p>
              Programmer, Unity developer and game designer who loves creating
              cool experiences for players — and keeps expanding his skills
              with every project, game jam and prototype.
            </p>
            <Link to="/about" className="btn btn--ghost">
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-skills">
        <div className="skills-section fade-in">
          <h2 className="skills-section__title">
            <span className="skills-section__muted">My</span>{' '}
            <span className="skills-section__accent">Skillset</span>
          </h2>

          <div className="skills-cloud">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div className="skill-pill" key={skill.name}>
                  <span className="skill-pill__icon">
                    <Icon />
                  </span>
                  <span className="skill-pill__label">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
