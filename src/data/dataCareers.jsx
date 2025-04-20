import backendIllustration from "../assets/Ilustrations/uxuiIllustration.webp";
import frontendIllustration from "../assets/Ilustrations/frontendIllustration.webp";
import fullstackIllustration from "../assets/Ilustrations/graphicIllustration.webp";

export const dataCareers = {
  1: {
    title: "Frontend",
    caption: "Desarrollo",
    description:
      "Mi enfoque principal es crear interfaces dinámicas, responsivas, intuitivas y visualmente optimizadas, utilizando tecnologías modernas para ofrecer experiencias de usuario excepcionales.",
    tags: [
      "React",
      "Angular",
      "Blockchain",
      "Tailwind CSS",
      "Bootstrap",
      "Firebase",
      "CSS",
      "HTML",
      "JavaScript",
      "TypeScript",
    ],
    priority: "Principal",
    startDate: "2023",
    svg: (
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9395 4.05327L15.4463 5.69966C16.8154 7.19825 17.5 7.947 17.5 8.90829C17.5 9.86851 16.8154 10.6183 15.4454 12.1158L13.9395 13.7633M11.2643 1L9.5 9L7.73574 17M5.06049 4.05327L3.55461 5.69966C2.18368 7.19825 1.5 7.94808 1.5 8.90829C1.5 9.86851 2.18457 10.6183 3.55461 12.1158L5.06049 13.7633"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    illustration: (
      <img
        src={backendIllustration}
        alt="Illustración 3D de pieza de rompecabezas"
      />
    ),
  },
  2: {
    title: "Backend",
    caption: "Desarrollo",
    description:
      "Desarrollo APIs robustas y sistemas escalables, gestionando bases de datos y lógica del servidor para garantizar funcionalidad y seguridad.",
    tags: [
      "Spring Boot",
      "Postman",
      "Swagger",
      "JSON Web Token",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle SQL",
      "SQL Server",
    ],
    priority: "Complementario",
    startDate: "2022",
    svg: (
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H14.5C16.1569 1.5 17.5 2.84315 17.5 4.5V13.5C17.5 15.1569 16.1569 16.5 14.5 16.5H4.5C2.84315 16.5 1.5 15.1569 1.5 13.5V4.5Z"
          stroke="#1D1D1D"
          strokeWidth="2"
        />
        <path
          d="M9.5 1.5V16.5M1.5 9H17.5"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    illustration: (
      <img
        src={frontendIllustration}
        alt="Illustración 3D de código de desarrollo web"
      />
    ),
  },
  3: {
    title: "Full Stack",
    caption: "Desarrollo",
    description:
      "Integro frontend y backend aplicaciones completas, desde la interfaz hasta la lógica del servidor, asegurando rendimiento y cohesión.",
    tags: [
      "React + Vite",
      "Docker",
      "GitHub",
      "Powershell",
      "Java",
      "Spring Security",
      "Spring WebFlux",
      "Notion",
      "Trello",
    ],
    priority: "Complementario",
    startDate: "2024",
    svg: (
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 7.4C1.5 4.3832 1.5 2.8744 2.4376 1.9376C3.3744 1 4.8832 1 7.9 1H11.1C14.1168 1 15.6256 1 16.5624 1.9376C17.5 2.8744 17.5 4.3832 17.5 7.4V8.2C17.5 10.4624 17.5 11.5944 16.7968 12.2968C16.0944 13 14.9624 13 12.7 13H6.3C4.0376 13 2.9056 13 2.2032 12.2968C1.5 11.5944 1.5 10.4624 1.5 8.2V7.4Z"
          stroke="#1D1D1D"
          strokeWidth="2"
        />
        <path
          d="M12.7 17H6.3M9.5 13V17M17.5 9.80005H1.5"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    illustration: (
      <img
        src={fullstackIllustration}
        alt="Illustración 3D de una composición de paisaje"
      />
    ),
  },
};
