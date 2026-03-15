import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">Fullstack Developer & Holistic Therapist</span>
            <h1>Tech & Harmony</h1>
            <p className="lead">
              Transformando ideas en código con estructura y empatía. 
              Desarrolladora apasionada por crear soluciones digitales que resuenan con el bienestar humano.
            </p>
            <div className="hero-actions">
              <Link to="/proyectos" className="petrol-btn">Ver mis Proyectos</Link>
              <a href="#contacto" className="btn-secondary">Contactar</a>
            </div>
          </div>
          <div className="hero-image">
             {/* Aquí iría una imagen o ilustración abstracta */}
             <div className="abstract-shape"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-split soft-section">
        <div className="container split-grid">
          <div className="about-card dev">
            <h3>Solidez Técnica</h3>
            <p>
              Especializada en el ecosistema <strong>Java (Spring Boot)</strong> y <strong>Python (Django)</strong>, 
              con frontend dinámico en <strong>React</strong>. Aplico metodologías <strong>Scrum</strong> para 
              asegurar entregas eficientes y alineadas con las necesidades del usuario.
            </p>
          </div>
          <div className="about-card therapy">
            <h3>Visión Holística</h3>
            <p>
              Mi experiencia en terapias alternativas me permite abordar el desarrollo desde la 
              <strong> empatía y la escucha activa</strong>. Diseño interfaces que no solo funcionan, 
              sino que cuidan la experiencia y el estado emocional del usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-bar">
        <div className="container">
          <h2>Stack Tecnológico</h2>
          <div className="skills-grid">
            {['Java', 'Spring Boot', 'React', 'Python', 'Django', 'Scrum', 'PostgreSQL'].map(skill => (
              <div key={skill} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
