// src/pages/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-photo">
          <img src="/src/assets/images/profile.jpg" alt="Foto de perfil" />
        </div>
        <div className="intro">
          <h1 id="header-greeting">¡Hola!<br />mi nombre es</h1>
          <h2 id="header-name">Miguel Angel Carlos Rojas</h2>
          <p><span className="typing-text"></span></p>
          <a
            href="/src/components/pdf/CURRICULUM-CARLOS-ROJAS-MIGUEL-ANGEL.pdf"
            className="btn download-btn"
            download
            id="download-cv"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4726/4726010.png"
              alt="PDF Icon"
              className="pdf-icon"
            />
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;