import React from 'react';
import { FooterProps } from '../../utils/types';

const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p id="footer-text">
          {translations["footer-text"] || "© 2024 Miguel Carlos Rojas. Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;