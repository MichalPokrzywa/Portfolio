// src/pages/Home.js
import React from 'react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
