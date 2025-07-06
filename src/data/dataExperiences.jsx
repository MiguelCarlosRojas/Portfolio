import MedexLogo from "../assets/experiences/MedexLogo.webp";
import ValleGrandeLogo from "../assets/experiences/ValleGrandeLogo.webp";
import ParroquiaLogo from "../assets/experiences/ParroquiaLogo.webp";
import keOlaLogo from "../assets/experiences/keOlaLogo.webp";

export const dataExperiences = [
  {
    role: "Full Stack Developer",
    organization: {
      title: "keOla Networks",
      image: keOlaLogo,
      website: "https://inclub.world",
    },
    startDate: "2025-05",
    endDate: "",
    employmentType: "Temporary Contract",
    workMode: "Remoto",
    responsabilities: [
    ],
    tools: [
      "springboot",
      "angular",
      "scss",
      "typescript",
      "excalidraw"
    ],
  },
  {
    role: "Full Stack Developer",
    organization: {
      title: "MEDEX",
      image: MedexLogo,
      website: "https://demo.medex.website",
    },
    startDate: "2025-02",
    endDate: "",
    employmentType: "Freelance",
    workMode: "Remoto",
    responsabilities: [
      "Desarrollo de APIs en Java con Spring Boot para la gestión eficiente, segura y escalable de compras y ventas de medicamentos.",
      "Creación de interfaces de usuario responsivas utilizando React.",
      "Administración de bases de datos MySQL para una gestión eficiente, segura, optimizada y escalable de productos.",
      "Implementación de un sistema de alertas de notificaciones personalizadas, automáticas y en tiempo real para usuarios.",
      "Integración de seguridad con JSON Web Token y OAuth 2.",
      "Diseño estilizado y responsivo utilizando Tailwind CSS.",
    ],
    tools: [
      "springboot",
      "reactjs",
      "mysql",
      "jwt",
      "typescript",
      "tailwindcss",
      "tandia",
    ],
  },
  {
    role: "Blockchain Developer",
    organization: {
      title: "Valle Grande",
      image: ValleGrandeLogo,
      website: "https://nex-coin-rho.vercel.app",
    },
    startDate: "2024-09",
    endDate: "2024-12",
    employmentType: "Part-time",
    workMode: "Remoto",
    responsabilities: [
      "Desarrollo de contratos inteligentes utilizando Solidity para el proyecto NexCoin con alta eficiencia y seguridad robusta.",
      "Creación de interfaces de usuario dinámicas con React.",
      "Integración de MetaMask para facilitar transacciones blockchain.",
      "Diseño de interfaces estilizadas utilizando Tailwind CSS.",
      "Implementación de tecnología blockchain para garantizar transparencia, seguridad y escalabilidad en el comercio minorista.",
    ],
    tools: [
      "figma",
      "trello",
      "reactjs",
      "metamask",
      "typescript",
      "blockchain",
      "remixethereum",
      "github",
    ],
  },
  {
    role: "Frontend Web Developer",
    organization: {
      title: "Parroquia de San Vicente Mártir",
      image: ParroquiaLogo,
      website: "https://vg-web-divinex.vercel.app",
    },
    startDate: "2024-06",
    endDate: "2024-12",
    employmentType: "Full-time",
    workMode: "Híbrido",
    responsabilities: [
      "Desarrollo de un sistema integral, escalable y eficiente para la gestión de constancias sacramentales y contabilidad parroquial.",
      "Implementación de backend robusto utilizando Spring Boot.",
      "Creación de interfaces web dinámicas y responsivas con Angular.",
      "Gestión eficiente de datos con MongoDB como base datos NoSQL.",
      "Implementación de seguridad con JSON Web Token y OAuth 2.",
      "Integración de servicios en la nube con Firebase optimizada.",
      "Diseño estilizado, responsivo y moderno utilizando Tailwind CSS.",
    ],
    tools: [
      "springboot",
      "angular",
      "typescript",
      "mongodb",
      "jwt",
      "firebase",
      "tailwindcss",
    ],
  },
];
