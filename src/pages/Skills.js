// src/pages/Skills.js
import React from 'react';
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


export default function Skills() {
  return (
    <section className="section">
      <div className="section__header fade-in" style={{ textAlign: 'center' }}>
        <h1 className="section__title">Skills</h1>
        <p className="section__subtitle">
          Technologies in which I have experience
        </p>
      </div>

      <div className="skills-section fade-in">
        <h2 className="skills-section__title">
          <span className="skills-section__muted">Professional</span>{' '}
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
  );
}
