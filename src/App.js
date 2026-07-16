// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShaderBackground from './components/ShaderBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

// zmiana podstrony wraca na górę strony
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// klucz po ścieżce remountuje wrapper przy nawigacji,
// więc glitch odtwarza się na każdej zmianie podstrony
function GlitchedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-glitch">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ShaderBackground />
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <div className="app-root">
          <Navbar />
          <main className="page-container">
            <GlitchedRoutes />
          </main>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Michał Pokrzywa · Portfolio project</p>
          </footer>
        </div>
      </Router>
    </>
  );
}
