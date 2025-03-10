import React from 'react';
import { HeaderProps } from '../../utils/types';
import ProfileImage from '../../assets/images/profile.jpg';
import CurriculumPDF from '../../views/pdf/CURRICULUM-CARLOS-ROJAS-MIGUEL-ANGEL.pdf';

const Header: React.FC<HeaderProps> = ({ translations }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-photo">
          <img src={ProfileImage} alt="Foto de perfil" />
        </div>
        <div className="intro">
          <h1 id="header-greeting">
            {translations["header-greeting"] || "¡Hola!\nmi nombre es"}
          </h1>
          <h2 id="header-name">
            {translations["header-name"] || "Miguel Angel Carlos Rojas"}
          </h2>
          <p><span className="typing-text"></span></p>
          <a
            href={CurriculumPDF}
            className="btn download-btn"
            download
            id="download-cv"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4726/4726010.png"
              alt="PDF Icon"
              className="pdf-icon"
            />
            {translations["download-cv"] || "Descargar CV"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;