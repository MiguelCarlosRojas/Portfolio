import React, { useEffect, useState } from 'react';
import '../App.css';
import { toggleLanguage } from '../translation/translate';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Available from './components/Available';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Portfolio: React.FC = () => {
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Efecto para el toggle del menú
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

  // Efecto de escritura
  useEffect(() => {
    const typingElement = document.querySelector(".typing-text") as HTMLElement | null;
    const text = [
      "Un desarrollador Full-Stack",
      "Amo crear sistemas eficientes y escalables",
      "Diseño interfaces modernas e intuitivas"
    ];
    let i = 0;

    function typeWord() {
      if (i < text.length && typingElement) {
        let charIndex = 0;
        typingElement.classList.add("typing");

        function typeLetter() {
          if (charIndex < text[i].length && typingElement) {
            typingElement.textContent = (typingElement.textContent || '') + text[i].charAt(charIndex);
            charIndex++;
            setTimeout(typeLetter, 100);
          } else {
            setTimeout(() => {
              if (typingElement) {
                typingElement.classList.remove("typing");
                setTimeout(deleteWord, 1000);
              }
            }, 1000);
          }
        }

        function deleteWord() {
          if (typingElement) {
            let charIndex = typingElement.textContent?.length || 0;
            function deleteLetter() {
              if (charIndex > 0 && typingElement) {
                typingElement.textContent = typingElement.textContent?.slice(0, charIndex - 1) || '';
                charIndex--;
                setTimeout(deleteLetter, 50);
              } else {
                i++;
                if (i === text.length) {
                  i = 0;
                }
                setTimeout(typeWord, 1500);
              }
            }
            deleteLetter();
          }
        }

        typeLetter();
      }
    }

    typeWord();
  }, []);

  // Función para manejar el cambio de idioma
  const handleToggleLanguage = async () => {
    const newTranslations = await toggleLanguage();
    setTranslations(newTranslations);
  };

  return (
    <>
      <div id="loading-overlay" className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
      <Navbar translations={translations} onToggleLanguage={handleToggleLanguage} />
      <Header translations={translations} />
      <main>
        <About translations={translations} />
        <Available translations={translations} />
        <Skills translations={translations} />
        <Projects translations={translations} />
      </main>
      <Footer translations={translations} />
    </>
  );
};

export default Portfolio;