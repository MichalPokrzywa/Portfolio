// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <Router basename="/Portfolio">
      <div className="app-root">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Michał Pokrzywa · Portfolio project</p>
        </footer>
      </div>
    </Router>
  );
}
