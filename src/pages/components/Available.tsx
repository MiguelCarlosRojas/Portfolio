import React from 'react';
import { AvailableProps } from '../../utils/types';
import WhatsAppIcon from '../../assets/icons/whatsapp.webp';

const Available: React.FC<AvailableProps> = ({ translations }) => {
  return (
    <section id="available" className="available">
      <div className="container">
        <div className="content">
          <h2 className="title" id="available-title">
            {translations["available-title"] || "¡Vamos a crear algo juntos!"}
          </h2>
          <p className="description" id="available-description">
            {translations["available-description"] || "Estoy en búsqueda de nuevos proyectos emocionantes y estaría encantado de escuchar tus ideas. Ya sea que tengas un concepto claro o solo una idea en mente, podemos trabajar juntos para darle vida. ¡No importa el tamaño del proyecto, lo importante es que trabajemos juntos para lograrlo!"}
          </p>
          <p className="call-to-action" id="available-call-to-action">
            {translations["available-call-to-action"] || "Tómate un momento para contarme lo que tienes en mente, ¡y comencemos a crear algo increíble juntos! Estoy listo para aportar mi experiencia y habilidades para hacer que tu visión se haga realidad."}
          </p>
          <p className="more-info" id="available-more-info">
            {translations["available-more-info"] || "Ya sea un sitio web, una aplicación o cualquier otro tipo de proyecto, puedo ayudarte a transformar tus ideas en un producto final. ¡Hablemos y hagamos que suceda!"}
          </p>
        </div>
        <a
          href="https://wa.me/914793557"
          className="btn"
          target="_blank"
          id="whatsapp-button"
        >
          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          {translations["whatsapp-button"] || "Envíame un WhatsApp"}
        </a>
      </div>
    </section>
  );
};

export default Available;