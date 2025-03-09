// src/pages/Portfolio.tsx
import React, { useEffect } from 'react';
import '../app.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Available from './components/Available';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Portfolio: React.FC = () => {
  // Efecto para el toggle del menú (mantenido aquí porque afecta a Navbar)
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

  // Efecto de escritura (mantenido aquí porque afecta a Header)
  useEffect(() => {
    const typingElement = document.querySelector(".typing-text") as HTMLElement | null;
    const text = ["Desarrollador Front-End", "Diseñador UX/UI"];
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

  return (
    <>
      <div id="loading-overlay" className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
      <Navbar />
      <Header />
      <main>
        <About />
        <Available />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;