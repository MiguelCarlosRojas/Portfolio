import React from 'react';

interface FooterProps {
  translations: Record<string, string>;
}

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