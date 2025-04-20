import PLSQLCertificate from "../assets/certificates/PLSQLCertificate.pdf";
import SQLCertificate from "../assets/certificates/SQLCertificate.pdf";
import PythonCertificate from "../assets/certificates/PythonCertificate.pdf";

export const dataEducation = [
  {
    title: "Domina Spring Boot",
    type: "course",
    url: "spring-boot",
    institution: 1,
    skills: ["Spring Boot", "Java", "REST APIs", "Microservices"],
    startDate: "2025-02",
    endDate: "2025-02",
    stats: {
      outstanding: ["8 proyectos", "completados"],
      classes: ["10 clases", "8 semanas"],
      hours: "32",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/4565545d3b9748bf356ad5ed1525ad5c3fc71e2a64f7ca5a58903ac812bc888f",
      src: "https://i.postimg.cc/bvc4DHmb/1738900077414.jpg",
    },
    description:
      "Aprendí a desarrollar aplicaciones robustas y escalables utilizando Spring Boot, enfocándome en la creación de REST APIs y microservicios. Este curso me permitió dominar conceptos clave de Java y frameworks modernos para backend.",
  },
  {
    title: "HTML avanzado",
    type: "course",
    url: "html-advanced",
    institution: 1,
    skills: ["HTML5", "Semantic HTML", "Accessibility", "Web Standards"],
    startDate: "2025-02",
    endDate: "2025-02",
    stats: {
      outstanding: ["6 ejercicios", "de accesibilidad"],
      classes: ["8 clases", "6 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/4c98982b6b83b6cee1ce594e40cd27578472ec69a4d1e900a1e53cd8dd7e2665",
      src: "https://i.postimg.cc/d3p5MwXd/1738546499968.jpg",
    },
    description:
      "Profundicé en técnicas avanzadas de HTML, incluyendo estructuras semánticas, accesibilidad web y estándares modernos para crear sitios web optimizados.",
  },
  {
    title: "Angular avanzado",
    type: "course",
    url: "angular-advanced",
    institution: 1,
    skills: ["Angular", "TypeScript", "RxJS", "Component Architecture"],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["7 componentes", "desarrollados"],
      classes: ["12 clases", "10 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/23199ceb197732ba52c5edd47b6697a592b9f00c128b6dcb7b25bc6298344802",
      src: "https://i.postimg.cc/qvf1jB2H/1737861155788.jpg",
    },
    description:
      "Desarrollé habilidades avanzadas en Angular, enfocándome en TypeScript, RxJS y la creación de aplicaciones SPA escalables con arquitectura de componentes.",
  },
  {
    title: "JavaScript avanzado",
    type: "course",
    url: "javascript-advanced",
    institution: 1,
    skills: [
      "JavaScript",
      "ES6+",
      "Asynchronous Programming",
      "Functional Programming",
    ],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["10 desafíos", "resueltos"],
      classes: ["6 clases", "4 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/d770c1ac8a000b26e488d58c5da462ebc92b6e3686864cdbb9e0f9b0bcdf8dc0",
      src: "https://i.postimg.cc/wB2FqhZ9/1737742278909.jpg",
    },
    description:
      "Resolví desafíos avanzados de programación en JavaScript, aplicando conceptos de ES6+, programación asíncrona y paradigmas funcionales para optimizar código.",
  },
  {
    title: "GIT Y GITHUB",
    type: "course",
    url: "git-github",
    institution: 2,
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["5 repositorios", "creados"],
      classes: ["8 clases", "6 semanas"],
      hours: "8",
    },
    certificate: {
      link: "https://cursos.desafiolatam.com/certificates/iiwfq8f8ss",
      src: "https://i.postimg.cc/PxF4Zddc/certificate-608074369.jpg",
    },
    description:
      "Aprendí a usar Git y GitHub para gestionar versiones de código, colaborar en proyectos y mantener un flujo de trabajo profesional en desarrollo de software.",
  },
  {
    title: "Github Copilot",
    type: "course",
    url: "github-copilot",
    institution: 3,
    skills: ["GitHub Copilot", "AI-Assisted Coding", "Productivity Tools"],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["4 scripts", "optimizados"],
      classes: ["5 clases", "4 semanas"],
      hours: "8",
    },
    certificate: {
      link: "https://codigofacilito.com/certificates/9edcce64-6017-4426-93c1-f07f578168d4",
      src: "https://i.postimg.cc/X75RVz83/certificate-placeholder-c9758dcd4e3398322cc590f6313fde7b4d184b28e67d3500ffdac5d690a75b41.png",
    },
    description:
      "Exploré el uso de GitHub Copilot para mejorar la productividad en la codificación, aprendiendo a integrar esta herramienta de IA eficientemente en mi flujo de trabajo.",
  },
  {
    title: "Python desde cero",
    type: "course",
    url: "python-basics",
    institution: 4,
    skills: [
      "Python",
      "Programming Fundamentals",
      "Data Structures",
      "Automation",
    ],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["6 programas", "desarrollados"],
      classes: ["10 clases", "8 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://postimg.cc/BjvM26k8",
      src: PythonCertificate,
      type: "pdf",
    },
    description:
      "Adquirí conocimientos fundamentales de programación en Python, incluyendo estructuras de datos, automatización y resolución de problemas prácticos.",
  },
  {
    title: "Prueba de tecleo",
    type: "course",
    url: "typing-test",
    institution: 5,
    skills: ["Typing Speed", "Accuracy"],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["3 pruebas", "completadas"],
      classes: ["1 clase", "1 semana"],
      hours: "8",
    },
    certificate: {
      link: "https://www.typing.com/student/verify#329394131-163384682",
      src: "https://i.postimg.cc/ncwXJM0N/doc.png",
    },
    description:
      "Mejoré mi velocidad y precisión en mecanografía, completando una prueba cronometrada que evalúa habilidades de escritura eficiente y profesional.",
  },
  {
    title: "React: TypeScript",
    type: "course",
    url: "react-typescript",
    institution: 1,
    skills: [
      "React",
      "TypeScript",
      "Component Development",
      "State Management",
    ],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["8 componentes", "creados"],
      classes: ["10 clases", "8 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/07c9e1ff4d1fed98eefea6491df28dece245c8f8cb8f065f3a6f77e79817d6af",
      src: "https://i.postimg.cc/HxHx2Mk8/1737772922361.jpg",
    },
    description:
      "Aprendí a desarrollar aplicaciones React con TypeScript, mejorando la tipificación estática, la escalabilidad, gestión estatal robusta en proyectos frontend.",
  },
  {
    title: "SQL Interactivo",
    type: "course",
    url: "sql-interactive",
    institution: 2,
    skills: ["SQL", "Database Querying", "Data Analysis"],
    startDate: "2025-01",
    endDate: "2025-01",
    stats: {
      outstanding: ["10 consultas", "resueltas"],
      classes: ["6 clases", "5 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.tutorialesinteractivos.com/certificados/faf25f62-e14d-4f17-96f1-77d5a0e4bc40",
      src: "https://i.postimg.cc/G2QpSp47/46420-17012025.webp",
    },
    description:
      "Desarrollé habilidades en consultas SQL interactivas, aprendiendo a analizar, gestionar datos y optimizar consultas en bases de datos relacionales.",
  },
  {
    title: "Integrate BigQuery",
    type: "course",
    url: "bigquery-apps-script",
    institution: 6,
    skills: ["BigQuery", "Google Apps Script", "Data Integration"],
    startDate: "2024-07",
    endDate: "2024-07",
    stats: {
      outstanding: ["5 scripts", "automatizados"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.credly.com/badges/1262858c-20c2-41ca-88ee-4bcabdd44e4f",
      src: "https://i.postimg.cc/7hhqsn8h/fwdz2h3n.png",
    },
    description:
      "Aprendí a integrar datos de BigQuery con Google Workspace utilizando Apps Script, automatizando procesos y flujos de datos en entornos empresariales.",
  },
  {
    title: "Kubernetes",
    type: "course",
    url: "kubernetes-gcp",
    institution: 7,
    skills: ["Kubernetes", "Google Cloud", "Container Orchestration"],
    startDate: "2024-06",
    endDate: "2024-06",
    stats: {
      outstanding: ["6 clústeres", "configurados"],
      classes: ["12 clases", "10 semanas"],
      hours: "32",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/9541394",
      src: "https://i.postimg.cc/2ybPLcNQ/udemy-course-1742430577-75722.jpg",
    },
    description:
      "Adquirí conocimientos en la gestión de clústeres Kubernetes en Google Cloud, enfocándome en la orquestación de contenedores para aplicaciones escalables.",
  },
  {
    title: "Manage Kubernetes",
    type: "course",
    url: "manage-kubernetes-gcp",
    institution: 6,
    skills: ["Kubernetes", "Google Cloud", "Cluster Management"],
    startDate: "2024-06",
    endDate: "2024-06",
    stats: {
      outstanding: ["5 configuraciones", "optimizadas"],
      classes: ["10 clases", "8 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.credly.com/badges/9570ef5e-438c-452a-9602-96275bfbe6ab",
      src: "https://i.postimg.cc/HWFLZFnC/vlx7sbqm.png",
    },
    description:
      "Desarrollé habilidades para administrar clústeres Kubernetes en Google Cloud, optimizando recursos, asegurando alta disponibilidad y escalabilidad.",
  },
  {
    title: "Vertex AI Studio",
    type: "course",
    url: "vertex-ai",
    institution: 7,
    skills: ["Vertex AI", "Machine Learning", "Google Cloud"],
    startDate: "2024-05",
    endDate: "2024-05",
    stats: {
      outstanding: ["4 modelos", "desplegados"],
      classes: ["8 clases", "6 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/9177688",
      src: "https://i.postimg.cc/6QHWdmgg/s8-Kl8-IMv-J4-EOk-HEB1z-XMkw12hb-SQNWYKXOtpw-NSIa-Ro.png",
    },
    description:
      "Exploré Vertex AI Studio para desarrollar y desplegar modelos de machine learning en Google Cloud, aprendiendo sus herramientas, flujos de trabajo y pipelines.",
  },
  {
    title: "Kubernetes Engine",
    type: "course",
    url: "gke-cost-optimization",
    institution: 7,
    skills: ["Kubernetes", "Cost Optimization", "Google Cloud"],
    startDate: "2024-05",
    endDate: "2024-05",
    stats: {
      outstanding: ["5 estrategias", "implementadas"],
      classes: ["6 clases", "5 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/9225516",
      src: "https://i.postimg.cc/qM8pmRW8/VLch-W5g-Ft9-RAm-OHS8y8c-DEz-Hd-Iu-Sn-GAQFarx-QMFUc.png",
    },
    description:
      "Aprendí estrategias para optimizar costos en Google Kubernetes Engine, gestionando recursos de manera eficiente en entornos de nube y minimizando gastos.",
  },
  {
    title: "Looker",
    type: "course",
    url: "looker-data",
    institution: 7,
    skills: ["Looker", "Data Visualization", "Data Analysis"],
    startDate: "2024-04",
    endDate: "2024-04",
    stats: {
      outstanding: ["6 paneles", "creados"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/8787578",
      src: "https://i.postimg.cc/XN5WJqjT/h-B0-R8a-SQjd1-Fl-Bz-UFrtf-Un-THzxwa-O4-Qz-Yar-Pwx-KLYrc.png",
    },
    description:
      "Desarrollé habilidades en Looker para analizar y visualizar datos, creando paneles interactivos, dinámicos y eficientes para la toma de decisiones basada en datos.",
  },
  {
    title: "Docker",
    type: "course",
    url: "docker-intro",
    institution: 8,
    skills: ["Docker", "Containerization", "DevOps"],
    startDate: "2024-04",
    endDate: "2024-04",
    stats: {
      outstanding: ["5 contenedores", "desplegados"],
      classes: ["6 clases", "5 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.datacamp.com/statement-of-accomplishment/course/ef9af0c499acbe9571d122a70d50ed7621f8c0c1?raw=1",
      src: "https://i.postimg.cc/CLHVG2f7/certificate.png",
    },
    description:
      "Aprendí los fundamentos de Docker, incluyendo la creación y gestión de contenedores para desarrollar y desplegar aplicaciones modernas.",
  },
  {
    title: "APIs Google Cloud",
    type: "course",
    url: "ml-apis-gcp",
    institution: 7,
    skills: ["Machine Learning", "Data Preparation", "Google Cloud"],
    startDate: "2024-04",
    endDate: "2024-04",
    stats: {
      outstanding: ["4 datasets", "preparados"],
      classes: ["6 clases", "5 semanas"],
      hours: "16",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/8769771",
      src: "https://i.postimg.cc/d3641GL2/s-JCj-ZDim-Tgy-E9u1-WSb-Bbnl5-XOOupgo-NQNdd-Y2-Tzt-NKw.png",
    },
    description:
      "Adquirí habilidades para preparar datos en Google Cloud para su uso en APIs de machine learning, optimizando flujos de trabajo y pipelines automatizados de datos.",
  },
  {
    title: "Snowflake SQL",
    type: "course",
    url: "snowflake-intro",
    institution: 8,
    skills: ["Snowflake", "Data Warehousing", "Cloud Data"],
    startDate: "2024-03",
    endDate: "2024-03",
    stats: {
      outstanding: ["5 consultas", "optimizadas"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.datacamp.com/statement-of-accomplishment/course/405a65839fd5d39f9e92d8ce3252bbcd1c91cc89?raw=1",
      src: "https://i.postimg.cc/DZgMW9N4/certificate-1.png",
    },
    description:
      "Exploré Snowflake como plataforma de almacenamiento de datos en la nube, aprendiendo a gestionar y analizar grandes volúmenes de datos eficientemente.",
  },
  {
    title: "Data Analytics",
    type: "course",
    url: "data-analytics-gcp",
    institution: 7,
    skills: ["Data Analytics", "Google Cloud", "BigQuery"],
    startDate: "2024-02",
    endDate: "2024-02",
    stats: {
      outstanding: ["6 reportes", "generados"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.cloudskillsboost.google/public_profiles/4456efe4-8185-4df3-b584-cd9eccc9f0a7/badges/8164948",
      src: "https://i.postimg.cc/wTPbscw2/KDwg-Dp-Mg-KON24i-W8e-Dqc-vmu-Moq-MP2-NMk8-Npa-PLiy-E.png",
    },
    description:
      "Aprendí los fundamentos del análisis de datos en Google Cloud, utilizando herramientas como BigQuery para procesar y visualizar datos eficientemente.",
  },
  {
    title: "Programming PL/SQL",
    type: "course",
    url: "plsql",
    institution: 9,
    skills: ["PL/SQL", "Database Programming", "Oracle Database"],
    startDate: "2023-11",
    endDate: "2023-11",
    stats: {
      outstanding: ["8 procedimientos", "creados"],
      classes: ["10 clases", "8 semanas"],
      hours: "32",
    },
    certificate: {
      link: "https://postimg.cc/z3KgPrKx",
      src: PLSQLCertificate,
      type: "pdf",
    },
    description:
      "Desarrollé habilidades en programación de bases de datos con PL/SQL, creando procedimientos almacenados, funciones avanzadas y triggers en Oracle Database.",
  },
  {
    title: "Programming SQL",
    type: "course",
    url: "sql",
    institution: 9,
    skills: ["SQL", "Database Querying", "Oracle Database"],
    startDate: "2023-09",
    endDate: "2023-09",
    stats: {
      outstanding: ["10 consultas", "avanzadas"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://postimg.cc/SnNYsY5P",
      src: SQLCertificate,
      type: "pdf",
    },
    description:
      "Adquirí conocimientos avanzados en consultas SQL para Oracle Database, optimizando la gestión y análisis de datos relacionales eficientemente.",
  },
  {
    title: "La resiliencia",
    type: "course",
    url: "resilience",
    institution: 1,
    skills: ["Resilience", "Soft Skills", "Personal Development"],
    startDate: "2022-11",
    endDate: "2022-11",
    stats: {
      outstanding: ["4 ejercicios", "prácticos"],
      classes: ["5 clases", "4 semanas"],
      hours: "8",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/8b0befdb6256b03de045a006c62f57fd8c157ccebf2ff3d2c4978df2f3d1d7ec",
      src: "https://i.postimg.cc/J00PsGJS/1668683006992.png",
    },
    description:
      "Aprendí estrategias para desarrollar resiliencia, mejorando mi capacidad para adaptarme a desafíos y mantener el bienestar personal y profesional.",
  },
  {
    title: "La escucha activa",
    type: "course",
    url: "active-listening",
    institution: 1,
    skills: ["Active Listening", "Communication", "Soft Skills"],
    startDate: "2022-11",
    endDate: "2022-11",
    stats: {
      outstanding: ["3 casos", "resueltos"],
      classes: ["4 clases", "3 semanas"],
      hours: "8",
    },
    certificate: {
      link: "https://www.linkedin.com/learning/certificates/56374a1eb290e4deb8ad0a66ed5c7e4aadddcae2b0596de11a70c2d331cde655",
      src: "https://i.postimg.cc/R0mdcPK7/1737742669125.jpg",
    },
    description:
      "Desarrollé habilidades de escucha activa, mejorando mi capacidad para comprender y responder efectivamente en interacciones profesionales y empáticas.",
  },
  {
    title: "Introduction to Python",
    type: "course",
    url: "python-intro",
    institution: 8,
    skills: ["Python", "Programming Fundamentals", "Data Analysis"],
    startDate: "2022-03",
    endDate: "2022-03",
    stats: {
      outstanding: ["6 scripts", "desarrollados"],
      classes: ["8 clases", "6 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.datacamp.com/statement-of-accomplishment/course/916566747204d4fe494ebeb98eb26eec40334c3f?raw=1",
      src: "https://i.postimg.cc/8CbHwhmq/certificate-2.png",
    },
    description:
      "Adquirí conocimientos fundamentales de Python, enfocándome en programación, análisis de datos y estructuras datos para resolver problemas prácticos.",
  },
  {
    title: "Responsive Web Design",
    type: "course",
    url: "responsive-web-design",
    institution: 10,
    skills: ["HTML", "CSS", "Responsive Design", "Web Development"],
    startDate: "2022-03",
    endDate: "2022-03",
    stats: {
      outstanding: ["5 proyectos", "responsivos"],
      classes: ["10 clases", "8 semanas"],
      hours: "24",
    },
    certificate: {
      link: "https://www.freecodecamp.org/certification/carlosrojasmiguel/responsive-web-design",
      src: "https://i.postimg.cc/hvmMLNy0/Captura-de-pantalla-19-4-2025-20140.jpg",
    },
    description:
      "Aprendí a crear sitios web responsivos utilizando HTML y CSS, aplicando técnicas modernas de diseño adaptable y optimizado para múltiples dispositivos.",
  },
];
