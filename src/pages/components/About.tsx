import React from 'react';
import { AboutProps } from '../../utils/types';

const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" id="about-title">
          {translations["about-title"] || "Sobre mí"}
        </h2>
        <p className="section-subtitle" id="about-subtitle">
          {translations["about-subtitle"] || "Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Mi enfoque es construir aplicaciones robustas, eficientes y escalables que mejoren la experiencia del usuario y faciliten procesos complejos. Me encanta trabajar en equipo, aprender nuevas herramientas, compartir conocimientos y enfrentar desafíos que me permitan crecer profesionalmente."}
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3 id="about-experience-title">
              {translations["about-experience-title"] || "Experiencia Profesional"}
            </h3>
            <p id="about-experience-text">
              {translations["about-experience-text"] || "Con más de 3 años de experiencia en diseño y desarrollo de aplicaciones web, he trabajado en proyectos de diversa índole utilizando tecnologías como React + Vite, Angular, Blockchain, Tailwind CSS, Stack, Trello, Firebase, CSS3, HTML5, TypeScript, Powershell, Git, GitHub, Docker, entre otras. Además, tengo experiencia trabajando con bases de datos como MySQL, PostgreSQL, MongoDB, y SQL Server."}
            </p>
          </div>
          <div className="about-text">
            <h3 id="about-passion-title">
              {translations["about-passion-title"] || "Pasión por el Desarrollo"}
            </h3>
            <p id="about-passion-text">
              {translations["about-passion-text"] || "Mi pasión por el desarrollo me lleva a mantenerme actualizado sobre las últimas tendencias tecnológicas. Disfruto enfrentar nuevos retos, como la creación de soluciones basadas en Blockchain o el diseño de interfaces atractivas con Tailwind CSS y React. También me enfoco en el backend utilizando herramientas como Spring Boot, que me permite desarrollar aplicaciones rápidas, seguras y escalables."}
            </p>
          </div>
          <div className="about-text">
            <h3 id="about-teamwork-title">
              {translations["about-teamwork-title"] || "Trabajo en Equipo"}
            </h3>
            <p id="about-teamwork-text">
              {translations["about-teamwork-text"] || "En el día a día, me gusta trabajar en equipo, compartir conocimientos y aprender de las experiencias de otros. Considero que la comunicación efectiva, el trabajo colaborativo y la creatividad son clave para el éxito de cualquier proyecto. Además, soy una persona organizada, comprometida, proactiva, flexible, motivada y con gran capacidad de adaptación, lo que me permite gestionar múltiples tareas y proyectos de manera eficiente sin perder calidad en el trabajo."}
            </p>
          </div>
          <div className="about-text">
            <h3 id="about-tools-title">
              {translations["about-tools-title"] || "Herramientas"}
            </h3>
            <p id="about-tools-text">
              {translations["about-tools-text"] || "Algunas de las herramientas que utilizo habitualmente en mi trabajo incluyen GitHub para el control de versiones, Docker para la contenedorización de aplicaciones, y Postman para la prueba de APIs. Me apasiona aprender nuevas tecnologías, explorar herramientas innovadoras, mejorar procesos y siempre estoy buscando formas de optimizar procesos, mejorar la calidad y rendimiento de las aplicaciones de manera constante y eficiente."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;