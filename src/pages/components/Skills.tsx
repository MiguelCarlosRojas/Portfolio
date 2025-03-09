import React from 'react';

interface SkillsProps {
  translations: Record<string, string>;
}

const Skills: React.FC<SkillsProps> = ({ translations }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          {translations["skills-title"] || "Habilidades y Tecnologías"}
        </h2>
        <p className="section-subtitle" id="skills-subtitle">
          {translations["skills-subtitle"] || "Estas son las herramientas y tecnologías que utilizo para crear soluciones modernas y efectivas."}
        </p>
        <div className="skills-grid">
          <div className="skill fade-in delay-1">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
            </div>
            <h3>HTML</h3>
            <p id="skill-html-description">
              {translations["skill-html-description"] || "Experto en diseño de interfaces web modernas y funcionales."}
            </p>
          </div>
          <div className="skill fade-in delay-2">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
            </div>
            <h3>CSS</h3>
            <p id="skill-css-description">
              {translations["skill-css-description"] || "Estilos avanzados para experiencia visual fluida."}
            </p>
          </div>
          <div className="skill fade-in delay-3">
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" />
            </div>
            <h3>TypeScript</h3>
            <p id="skill-typescript-description">
              {translations["skill-typescript-description"] || "Código robusto y tipado para proyectos escalables."}
            </p>
          </div>
          <div className="skill fade-in delay-4">
            <div className="icon">
              <img src="https://vitejs.dev/logo.svg" alt="Vite" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
            </div>
            <h3>React + Vite</h3>
            <p id="skill-react-vite-description">
              {translations["skill-react-vite-description"] || "Desarrollo de frontend con herramientas modernas."}
            </p>
          </div>
          <div className="skill fade-in delay-5">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/353396/angular-icon.svg" alt="Angular" />
            </div>
            <h3>Angular</h3>
            <p id="skill-angular-description">
              {translations["skill-angular-description"] || "Creación de aplicaciones web robustas con arquitectura MVC."}
            </p>
          </div>
          <div className="skill fade-in delay-6">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
            </div>
            <h3>Tailwind CSS</h3>
            <p id="skill-tailwind-description">
              {translations["skill-tailwind-description"] || "Estilos personalizados y flexibles para interfaces únicas."}
            </p>
          </div>
          <div className="skill fade-in delay-7">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="Bootstrap" />
            </div>
            <h3>Bootstrap</h3>
            <p id="skill-bootstrap-description">
              {translations["skill-bootstrap-description"] || "Diseños rápidos con componentes predefinidos."}
            </p>
          </div>
          <div className="skill fade-in delay-8">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/331370/docker.svg" alt="Docker" />
            </div>
            <h3>Docker</h3>
            <p id="skill-docker-description">
              {translations["skill-docker-description"] || "Contenedores para despliegue y desarrollo escalable."}
            </p>
          </div>
          <div className="skill fade-in delay-9">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
            </div>
            <h3>Git</h3>
            <p id="skill-git-description">
              {translations["skill-git-description"] || "Control de versiones para gestionar cambios."}
            </p>
          </div>
          <div className="skill fade-in delay-10">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
            </div>
            <h3>GitHub</h3>
            <p id="skill-github-description">
              {translations["skill-github-description"] || "Colaboración en proyectos y almacenamiento de código."}
            </p>
          </div>
          <div className="skill fade-in delay-11">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/353735/firebase.svg" alt="Firebase" />
            </div>
            <h3>Firebase</h3>
            <p id="skill-firebase-description">
              {translations["skill-firebase-description"] || "Integración para autenticación y almacenamiento en la nube."}
            </p>
          </div>
          <div className="skill fade-in delay-12">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" />
            </div>
            <h3>Postman</h3>
            <p id="skill-postman-description">
              {translations["skill-postman-description"] || "Pruebas de API para asegurar la calidad del backend."}
            </p>
          </div>
          <div className="skill fade-in delay-13">
            <div className="icon">
              <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" />
            </div>
            <h3>MySQL</h3>
            <p id="skill-mysql-description">
              {translations["skill-mysql-description"] || "Gestión de bases de datos relacionales con MySQL."}
            </p>
          </div>
          <div className="skill fade-in delay-14">
            <div className="icon">
              <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg" alt="PostgreSQL" />
            </div>
            <h3>PostgreSQL</h3>
            <p id="skill-postgresql-description">
              {translations["skill-postgresql-description"] || "Gestión avanzada de bases de datos PostgreSQL."}
            </p>
          </div>
          <div className="skill fade-in delay-15">
            <div className="icon">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png" alt="MongoDB" />
            </div>
            <h3>MongoDB</h3>
            <p id="skill-mongodb-description">
              {translations["skill-mongodb-description"] || "Gestión de bases de datos NoSQL con MongoDB."}
            </p>
          </div>
          <div className="skill fade-in delay-16">
            <div className="icon">
              <img src="https://cs.hofstra.edu/docs/images/software/ssms.png" alt="SQL Server" />
            </div>
            <h3>SQL Server</h3>
            <p id="skill-sqlserver-description">
              {translations["skill-sqlserver-description"] || "Herramienta avanzada de administración SQL Server."}
            </p>
          </div>
          <div className="skill fade-in delay-17">
            <div className="icon">
              <img src="https://icon.icepanel.io/Technology/svg/SQL-Developer.svg" alt="Oracle SQL" />
            </div>
            <h3>Oracle SQL</h3>
            <p id="skill-oraclesql-description">
              {translations["skill-oraclesql-description"] || "Desarrollo y administración de bases de datos Oracle SQL."}
            </p>
          </div>
          <div className="skill fade-in delay-18">
            <div className="icon">
              <img src="https://www.vectorlogo.zone/logos/trello/trello-tile.svg" alt="Trello" />
            </div>
            <h3>Trello</h3>
            <p id="skill-trello-description">
              {translations["skill-trello-description"] || "Gestión de proyectos y tareas colaborativa de forma eficiente."}
            </p>
          </div>
          <div className="skill fade-in delay-19">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Docs_2020_Logo.svg" alt="Google Docs" />
            </div>
            <h3>Google Docs</h3>
            <p id="skill-googledocs-description">
              {translations["skill-googledocs-description"] || "Creación y colaboración en documentos de texto."}
            </p>
          </div>
          <div className="skill fade-in delay-20">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg" alt="Google Slides" />
            </div>
            <h3>Google Slides</h3>
            <p id="skill-googleslides-description">
              {translations["skill-googleslides-description"] || "Creación y presentación de diapositivas interactivas."}
            </p>
          </div>
          <div className="skill fade-in delay-21">
            <div className="icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" alt="Google Sheets" />
            </div>
            <h3>Google Sheets</h3>
            <p id="skill-googlesheets-description">
              {translations["skill-googlesheets-description"] || "Gestión de datos y fórmulas en hojas de cálculo colaborativas."}
            </p>
          </div>
          <div className="skill fade-in delay-22">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/223052/forms-document.svg" alt="Google Forms" />
            </div>
            <h3>Google Forms</h3>
            <p id="skill-googleforms-description">
              {translations["skill-googleforms-description"] || "Creación de formularios y encuestas de forma sencilla."}
            </p>
          </div>
          <div className="skill fade-in delay-23">
            <div className="icon">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-meet-10516012-8630401.png" alt="Google Meet" />
            </div>
            <h3>Google Meet</h3>
            <p id="skill-googlemeet-description">
              {translations["skill-googlemeet-description"] || "Plataforma de videoconferencias para reuniones remotas."}
            </p>
          </div>
          <div className="skill fade-in delay-24">
            <div className="icon">
              <img src="https://www.svgrepo.com/show/353811/google-drive.svg" alt="Google Drive" />
            </div>
            <h3>Google Drive</h3>
            <p id="skill-googledrive-description">
              {translations["skill-googledrive-description"] || "Almacenamiento en la nube para colaborar en archivos."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;