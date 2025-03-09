// src/pages/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" id="projects-title">
          Proyectos Destacados
        </h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-preview">
              <iframe
                src="https://nex-coin-gamma.vercel.app"
                frameBorder="0"
                loading="lazy"
                title="Vista previa del Proyecto NexCoin"
              ></iframe>
            </div>
            <div className="project-info">
              <h3 id="project-nexcoin-title">Proyecto NexCoin</h3>
              <p id="project-nexcoin-description">
                Plataforma para gestionar monedas digitales y transacciones de
                forma segura.
              </p>
              <a
                href="https://nex-coin-gamma.vercel.app"
                className="btn-project"
                target="_blank"
                id="project-nexcoin-button"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-preview">
              <iframe
                src="https://vg-web-divinex.vercel.app/"
                frameBorder="0"
                loading="lazy"
                title="Vista previa del Proyecto Divinex"
              ></iframe>
            </div>
            <div className="project-info">
              <h3 id="project-divinex-title">Proyecto Divinex</h3>
              <p id="project-divinex-description">
                Plataforma interactiva para la gestión de datos y servicios
                web con enfoque en la experiencia del usuario.
              </p>
              <a
                href="https://vg-web-divinex.vercel.app/"
                className="btn-project"
                target="_blank"
                id="project-divinex-button"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;