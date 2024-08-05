import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes className="text-gray-400 bg-gray-900 body-font">
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
        <Route path="/Portfolio/skills" element={<Skills />} />
        <Route path="/Portfolio/testimonials" element={<Testimonials />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
