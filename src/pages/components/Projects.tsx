// src/pages/components/Projects.tsx
import React from 'react';

interface ProjectsProps {
  translations: Record<string, string>;
}

const Projects: React.FC<ProjectsProps> = ({ translations }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" id="projects-title">
          {translations["projects-title"] || "Proyectos Destacados"}
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
              <h3 id="project-nexcoin-title">
                {translations["project-nexcoin-title"] || "Proyecto NexCoin"}
              </h3>
              <p id="project-nexcoin-description">
                {translations["project-nexcoin-description"] || "Plataforma para gestionar monedas digitales y transacciones de forma segura."}
              </p>
              <a
                href="https://nex-coin-gamma.vercel.app"
                className="btn-project"
                target="_blank"
                id="project-nexcoin-button"
              >
                {translations["project-nexcoin-button"] || "Ver Proyecto"}
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
              <h3 id="project-divinex-title">
                {translations["project-divinex-title"] || "Proyecto Divinex"}
              </h3>
              <p id="project-divinex-description">
                {translations["project-divinex-description"] || "Plataforma interactiva para la gestión de datos y servicios web con enfoque en la experiencia del usuario."}
              </p>
              <a
                href="https://vg-web-divinex.vercel.app/"
                className="btn-project"
                target="_blank"
                id="project-divinex-button"
              >
                {translations["project-divinex-button"] || "Ver Proyecto"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;