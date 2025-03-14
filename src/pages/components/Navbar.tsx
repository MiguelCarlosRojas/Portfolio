import React, { useEffect } from 'react';
import { NavbarProps } from '../../utils/types';
import LogoIcon from '../../assets/icons/icon.png';

const Navbar: React.FC<NavbarProps> = ({ translations, onToggleLanguage }) => {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navLeft = document.getElementById("nav-left");

    const handleMenuToggle = () => {
      navLeft?.classList.toggle("active");
    };

    menuIcon?.addEventListener("click", handleMenuToggle);
    
    return () => {
      menuIcon?.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="left-container">
        <div className="menu-icon" id="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <a href="#">
            <img src={LogoIcon} alt="Logo" className="logo-image" />
          </a>
        </div>
      </div>
      <ul className="nav-left" id="nav-left">
        <li><a id="nav-about" href="#about">{translations["nav-about"] || "Sobre mí"}</a></li>
        <li><a id="nav-contact" href="#available">{translations["nav-contact"] || "Contactar"}</a></li>
        <li><a id="nav-skills" href="#skills">{translations["nav-skills"] || "Habilidades"}</a></li>
        <li><a id="nav-projects" href="#projects">{translations["nav-projects"] || "Ir a proyectos"}</a></li>
      </ul>
      <div className="right-container">
        <div id="toggle-language" style={{ cursor: 'pointer' }} onClick={onToggleLanguage}>
          <img
            id="flag-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/24px-Flag_of_Mexico.svg.png"
            alt="Bandera de México"
            width={24}
            height={16}
          />
        </div>
        <ul className="nav-right">
          <li>
            <a href="https://www.linkedin.com/in/miguelacarlos/" target="_blank" aria-label="LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MiguelCarlosRojas" target="_blank" aria-label="GitHub">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;