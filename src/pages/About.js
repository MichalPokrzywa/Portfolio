// src/pages/About.js
import React from 'react';

const aboutSections = [
  {
    title: 'Who am I',
    text:
      'Programmer, Unity Developer, Game Designer which loves creating cool experiences for users and continuously expanding my knowledge and skills. ',
    image: `${process.env.PUBLIC_URL}/img/about1.jpg`,
  },
  {
    title: 'Education',
    text:
      'I hold a Master of Engineering degree in Computer Science in specialization of Interactive 3D Graphics from the Silesian University of Technology. At university i led the SKN GRID (Game, Design and Development) research club, where we explored various aspects of game development through collaboration and experimentation.',
    image: `${process.env.PUBLIC_URL}/img/about22.jpg`,
  },
  {
    title: 'Achievements',
    text:
      'I have participated in many competitions, such as ZTGK and Hackatons, where I have won medals. These experiences have helped me develop skills in rapid prototyping, creative problem solving, and working under time pressure.',
    image: `${process.env.PUBLIC_URL}/img/about3.jpg`,
  },
  {
    title: 'My Interests',
    text:
      'My greatest interest is car racing of all kinds (especially F1). As a hobby, I have been involved in fan dubbing of TV series and translating scripts for actors. I am currently working on my drawing skills.',
    image: `${process.env.PUBLIC_URL}/img/about4.jpg`,
  },
];

export default function About() {
  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">About me</h1>
      </div>

      <div className="about-grid">
        {aboutSections.map((item, index) => (
          <article
            key={item.title}
            className={`about-row fade-in ${index % 2 === 1 ? 'about-row--reverse' : ''}`}
          >
            <div className="about-row__image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="about-row__text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
