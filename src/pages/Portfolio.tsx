// src/pages/Portfolio.tsx
import React, { useEffect } from 'react';
import '../App.css'; // Ajusta la ruta si app.css está en otro lugar

const Portfolio: React.FC = () => {
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
    // Nota: En React, no necesitamos <html>, <head> ni <body> aquí
    // Eso lo maneja index.html
    <>
      <div id="loading-overlay" className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>

      <nav className="navbar">
        <div className="left-container">
          <div className="menu-icon" id="menu-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="logo">
            <a href="#">
              <img src="/src/assets/icons/icon.png" alt="Logo" className="logo-image" />
            </a>
          </div>
        </div>
        <ul className="nav-left" id="nav-left">
          <li><a id="nav-about" href="#about">Sobre mí</a></li>
          <li><a id="nav-contact" href="#available">Contactar</a></li>
          <li><a id="nav-skills" href="#skills">Habilidades</a></li>
          <li><a id="nav-projects" href="#projects">Ir a proyectos</a></li>
        </ul>
        <div className="right-container">
          <div id="toggle-language" style={{ cursor: 'pointer' }}>
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

      <main>
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title" id="about-title">Sobre mí</h2>
            <p className="section-subtitle" id="about-subtitle">
              Soy un desarrollador apasionado por la tecnología y la creación de
              soluciones innovadoras. Mi enfoque es construir aplicaciones
              robustas, eficientes y escalables que mejoren la experiencia del
              usuario y faciliten procesos complejos. Me encanta trabajar en
              equipo, aprender nuevas herramientas, compartir conocimientos y
              enfrentar desafíos que me permitan crecer profesionalmente.
            </p>
            <div className="about-content">
              <div className="about-text">
                <h3 id="about-experience-title">Experiencia Profesional</h3>
                <p id="about-experience-text">
                  Con más de 3 años de experiencia en diseño y desarrollo de
                  aplicaciones web, he trabajado en proyectos de diversa índole
                  utilizando tecnologías como <strong>React + Vite</strong>,
                  <strong>Angular</strong>, <strong>Blockchain</strong>,
                  <strong>Tailwind CSS</strong>, <strong>Stack</strong>,
                  <strong>Trello</strong>, <strong>Firebase</strong>,
                  <strong>CSS3</strong>, <strong>HTML5</strong>,
                  <strong>TypeScript</strong>, <strong>Powershell</strong>,
                  <strong>Git</strong>, <strong>GitHub</strong>,
                  <strong>Docker</strong>, entre otras. Además, tengo experiencia
                  trabajando con bases de datos como <strong>MySQL</strong>,
                  <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, y
                  <strong>SQL Server</strong>.
                </p>
              </div>
              <div className="about-text">
                <h3 id="about-passion-title">Pasión por el Desarrollo</h3>
                <p id="about-passion-text">
                  Mi pasión por el desarrollo me lleva a mantenerme actualizado
                  sobre las últimas tendencias tecnológicas. Disfruto enfrentar
                  nuevos retos, como la creación de soluciones basadas en
                  <strong>Blockchain</strong> o el diseño de interfaces atractivas
                  con <strong>Tailwind CSS</strong> y <strong>React</strong>.
                  También me enfoco en el backend utilizando herramientas como
                  <strong>Spring Boot</strong>, que me permite desarrollar
                  aplicaciones rápidas, seguras y escalables.
                </p>
              </div>
              <div className="about-text">
                <h3 id="about-teamwork-title">Trabajo en Equipo</h3>
                <p id="about-teamwork-text">
                  En el día a día, me gusta trabajar en equipo, compartir
                  conocimientos y aprender de las experiencias de otros. Considero
                  que la comunicación efectiva, el trabajo colaborativo y la
                  creatividad son clave para el éxito de cualquier proyecto.
                  Además, soy una persona organizada, comprometida, proactiva,
                  flexible, motivada y con gran capacidad de adaptación, lo que me
                  permite gestionar múltiples tareas y proyectos de manera
                  eficiente sin perder calidad en el trabajo.
                </p>
              </div>
              <div className="about-text">
                <h3 id="about-tools-title">Herramientas</h3>
                <p id="about-tools-text">
                  Algunas de las herramientas que utilizo habitualmente en mi
                  trabajo incluyen <strong>GitHub</strong> para el control de
                  versiones, <strong>Docker</strong> para la contenedorización de
                  aplicaciones, y <strong>Postman</strong> para la prueba de APIs.
                  Me apasiona aprender nuevas tecnologías, explorar herramientas
                  innovadoras, mejorar procesos y siempre estoy buscando formas de
                  optimizar procesos, mejorar la calidad y rendimiento de las
                  aplicaciones de manera constante y eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="available" className="available">
          <div className="container">
            <div className="content">
              <h2 className="title" id="available-title">
                ¡Vamos a crear algo juntos!
              </h2>
              <p className="description" id="available-description">
                Estoy en búsqueda de nuevos proyectos emocionantes y estaría
                encantado de escuchar tus ideas. Ya sea que tengas un concepto
                claro o solo una idea en mente, podemos trabajar juntos para darle
                vida. ¡No importa el tamaño del proyecto, lo importante es que
                trabajemos juntos para lograrlo!
              </p>
              <p className="call-to-action" id="available-call-to-action">
                Tómate un momento para contarme lo que tienes en mente, ¡y
                comencemos a crear algo increíble juntos! Estoy listo para aportar
                mi experiencia y habilidades para hacer que tu visión se haga
                realidad.
              </p>
              <p className="more-info" id="available-more-info">
                Ya sea un sitio web, una aplicación o cualquier otro tipo de
                proyecto, puedo ayudarte a transformar tus ideas en un producto
                final. ¡Hablemos y hagamos que suceda!
              </p>
            </div>
            <a
              href="https://wa.me/914793557"
              className="btn"
              target="_blank"
              id="whatsapp-button"
            >
              <img
                src="/src/assets/icons/whatsapp.webp"
                alt="WhatsApp"
                className="whatsapp-icon"
              />
              Envíame un WhatsApp
            </a>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title" id="skills-title">
              Habilidades y Tecnologías
            </h2>
            <p className="section-subtitle" id="skills-subtitle">
              Estas son las herramientas y tecnologías que utilizo para crear
              soluciones modernas y efectivas.
            </p>
            <div className="skills-grid">
              <div className="skill fade-in delay-1">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
                </div>
                <h3>HTML</h3>
                <p id="skill-html-description">
                  Experto en diseño de interfaces web modernas y funcionales.
                </p>
              </div>
              <div className="skill fade-in delay-2">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
                </div>
                <h3>CSS</h3>
                <p id="skill-css-description">
                  Estilos avanzados para experiencia visual fluida.
                </p>
              </div>
              <div className="skill fade-in delay-3">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" />
                </div>
                <h3>TypeScript</h3>
                <p id="skill-typescript-description">
                  Código robusto y tipado para proyectos escalables.
                </p>
              </div>
              <div className="skill fade-in delay-4">
                <div className="icon">
                  <img src="https://vitejs.dev/logo.svg" alt="Vite" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                </div>
                <h3>React + Vite</h3>
                <p id="skill-react-vite-description">
                  Desarrollo de frontend con herramientas modernas.
                </p>
              </div>
              <div className="skill fade-in delay-5">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/353396/angular-icon.svg" alt="Angular" />
                </div>
                <h3>Angular</h3>
                <p id="skill-angular-description">
                  Creación de aplicaciones web robustas con arquitectura MVC.
                </p>
              </div>
              <div className="skill fade-in delay-6">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                </div>
                <h3>Tailwind CSS</h3>
                <p id="skill-tailwind-description">
                  Estilos personalizados y flexibles para interfaces únicas.
                </p>
              </div>
              <div className="skill fade-in delay-7">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="Bootstrap" />
                </div>
                <h3>Bootstrap</h3>
                <p id="skill-bootstrap-description">
                  Diseños rápidos con componentes predefinidos.
                </p>
              </div>
              <div className="skill fade-in delay-8">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/331370/docker.svg" alt="Docker" />
                </div>
                <h3>Docker</h3>
                <p id="skill-docker-description">
                  Contenedores para despliegue y desarrollo escalable.
                </p>
              </div>
              <div className="skill fade-in delay-9">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
                </div>
                <h3>Git</h3>
                <p id="skill-git-description">
                  Control de versiones para gestionar cambios.
                </p>
              </div>
              <div className="skill fade-in delay-10">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
                </div>
                <h3>GitHub</h3>
                <p id="skill-github-description">
                  Colaboración en proyectos y almacenamiento de código.
                </p>
              </div>
              <div className="skill fade-in delay-11">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/353735/firebase.svg" alt="Firebase" />
                </div>
                <h3>Firebase</h3>
                <p id="skill-firebase-description">
                  Integración para autenticación y almacenamiento en la nube.
                </p>
              </div>
              <div className="skill fade-in delay-12">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" />
                </div>
                <h3>Postman</h3>
                <p id="skill-postman-description">
                  Pruebas de API para asegurar la calidad del backend.
                </p>
              </div>
              <div className="skill fade-in delay-13">
                <div className="icon">
                  <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" />
                </div>
                <h3>MySQL</h3>
                <p id="skill-mysql-description">
                  Gestión de bases de datos relacionales con MySQL.
                </p>
              </div>
              <div className="skill fade-in delay-14">
                <div className="icon">
                  <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg" alt="PostgreSQL" />
                </div>
                <h3>PostgreSQL</h3>
                <p id="skill-postgresql-description">
                  Gestión avanzada de bases de datos PostgreSQL.
                </p>
              </div>
              <div className="skill fade-in delay-15">
                <div className="icon">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png" alt="MongoDB" />
                </div>
                <h3>MongoDB</h3>
                <p id="skill-mongodb-description">
                  Gestión de bases de datos NoSQL con MongoDB.
                </p>
              </div>
              <div className="skill fade-in delay-16">
                <div className="icon">
                  <img src="https://cs.hofstra.edu/docs/images/software/ssms.png" alt="SQL Server" />
                </div>
                <h3>SQL Server</h3>
                <p id="skill-sqlserver-description">
                  Herramienta avanzada de administración SQL Server.
                </p>
              </div>
              <div className="skill fade-in delay-17">
                <div className="icon">
                  <img src="https://icon.icepanel.io/Technology/svg/SQL-Developer.svg" alt="Oracle SQL" />
                </div>
                <h3>Oracle SQL</h3>
                <p id="skill-oraclesql-description">
                  Desarrollo y administración de bases de datos Oracle SQL.
                </p>
              </div>
              <div className="skill fade-in delay-18">
                <div className="icon">
                  <img src="https://www.vectorlogo.zone/logos/trello/trello-tile.svg" alt="Trello" />
                </div>
                <h3>Trello</h3>
                <p id="skill-trello-description">
                  Gestión de proyectos y tareas colaborativa de forma eficiente.
                </p>
              </div>
              <div className="skill fade-in delay-19">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Docs_2020_Logo.svg" alt="Google Docs" />
                </div>
                <h3>Google Docs</h3>
                <p id="skill-googledocs-description">
                  Creación y colaboración en documentos de texto.
                </p>
              </div>
              <div className="skill fade-in delay-20">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg" alt="Google Slides" />
                </div>
                <h3>Google Slides</h3>
                <p id="skill-googleslides-description">
                  Creación y presentación de diapositivas interactivas.
                </p>
              </div>
              <div className="skill fade-in delay-21">
                <div className="icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" alt="Google Sheets" />
                </div>
                <h3>Google Sheets</h3>
                <p id="skill-googlesheets-description">
                  Gestión de datos y fórmulas en hojas de cálculo colaborativas.
                </p>
              </div>
              <div className="skill fade-in delay-22">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/223052/forms-document.svg" alt="Google Forms" />
                </div>
                <h3>Google Forms</h3>
                <p id="skill-googleforms-description">
                  Creación de formularios y encuestas de forma sencilla.
                </p>
              </div>
              <div className="skill fade-in delay-23">
                <div className="icon">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-meet-10516012-8630401.png" alt="Google Meet" />
                </div>
                <h3>Google Meet</h3>
                <p id="skill-googlemeet-description">
                  Plataforma de videoconferencias para reuniones remotas.
                </p>
              </div>
              <div className="skill fade-in delay-24">
                <div className="icon">
                  <img src="https://www.svgrepo.com/show/353811/google-drive.svg" alt="Google Drive" />
                </div>
                <h3>Google Drive</h3>
                <p id="skill-googledrive-description">
                  Almacenamiento en la nube para colaborar en archivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title" id="projects-title">
              Proyectos Destacados
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
                  <h3 id="project-nexcoin-title">Proyecto NexCoin</h3>
                  <p id="project-nexcoin-description">
                    Plataforma para gestionar monedas digitales y transacciones de
                    forma segura.
                  </p>
                  <a
                    href="https://nex-coin-gamma.vercel.app"
                    className="btn-project"
                    target="_blank"
                    id="project-nexcoin-button"
                  >
                    Ver Proyecto
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
                  <h3 id="project-divinex-title">Proyecto Divinex</h3>
                  <p id="project-divinex-description">
                    Plataforma interactiva para la gestión de datos y servicios
                    web con enfoque en la experiencia del usuario.
                  </p>
                  <a
                    href="https://vg-web-divinex.vercel.app/"
                    className="btn-project"
                    target="_blank"
                    id="project-divinex-button"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p id="footer-text">
            © 2024 Miguel Carlos Rojas. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;