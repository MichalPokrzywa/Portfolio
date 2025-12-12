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
  SiOpenai,SiPytorch ,
} from 'react-icons/si';
import { FaAws,FaJava,FaShieldVirus } from 'react-icons/fa';
import { TbBrandCSharp, TbCode, TbDatabase, TbCube } from 'react-icons/tb';
import { RiGeminiLine } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";

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
export default function Home() {
  return (
    <>
      <section className="hero fade-in">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I am</p>
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
            <span className="pill">Unity Developer</span>
            <span className="pill">Computer Graphics Programmer</span>
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