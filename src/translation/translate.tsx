// src/translation/translate.tsx
import { TranslateElement, TranslateResponse } from '../utils/types';

// URL de la API obtenida desde el entorno
const API_TRANSLATE_URL = import.meta.env.VITE_API_TRANSLATE_URL;

// Función para cambiar el idioma y devolver las traducciones
export async function toggleLanguage(): Promise<Record<string, string>> {
  const currentLanguage = getCurrentLanguage();
  const targetLanguage = currentLanguage === "es" ? "en" : "es";
  
  try {
    showLoading();
    const translations = await translateAllElements(targetLanguage);
    updateFlagIcon(targetLanguage);
    setCurrentLanguage(targetLanguage);
    return translations;
  } catch (error) {
    console.error("Error al traducir:", error);
    alert("Ocurrió un error al traducir el contenido.");
    return {};
  } finally {
    hideLoading();
  }
}

// Función para obtener el idioma actual
function getCurrentLanguage(): string {
  return localStorage.getItem("currentLanguage") || "es";
}

// Función para establecer el idioma actual
function setCurrentLanguage(language: string): void {
  localStorage.setItem("currentLanguage", language);
}

// Función para traducir todos los elementos de la página
async function translateAllElements(targetLanguage: string): Promise<Record<string, string>> {
  const elementsToTranslate: TranslateElement[] = [
    { id: "page-title", text: "Portafolio de Miguel Angel Carlos Rojas" }, // Valor inicial desde index.html
    { id: "nav-about", text: "Sobre mí" },
    { id: "nav-contact", text: "Contactar" },
    { id: "nav-skills", text: "Habilidades" },
    { id: "nav-projects", text: "Ir a proyectos" },
    { id: "header-greeting", text: "¡Hola!\nmi nombre es" },
    { id: "header-name", text: "Miguel Angel Carlos Rojas" },
    { id: "download-cv", text: "Descargar CV" },
    { id: "about-title", text: "Sobre mí" },
    { id: "about-subtitle", text: "Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Mi enfoque es construir aplicaciones robustas, eficientes y escalables que mejoren la experiencia del usuario y faciliten procesos complejos. Me encanta trabajar en equipo, aprender nuevas herramientas, compartir conocimientos y enfrentar desafíos que me permitan crecer profesionalmente." },
    { id: "about-experience-title", text: "Experiencia Profesional" },
    { id: "about-experience-text", text: "Con más de 3 años de experiencia en diseño y desarrollo de aplicaciones web, he trabajado en proyectos de diversa índole utilizando tecnologías como React + Vite, Angular, Blockchain, Tailwind CSS, Stack, Trello, Firebase, CSS3, HTML5, TypeScript, Powershell, Git, GitHub, Docker, entre otras. Además, tengo experiencia trabajando con bases de datos como MySQL, PostgreSQL, MongoDB, y SQL Server." },
    { id: "about-passion-title", text: "Pasión por el Desarrollo" },
    { id: "about-passion-text", text: "Mi pasión por el desarrollo me lleva a mantenerme actualizado sobre las últimas tendencias tecnológicas. Disfruto enfrentar nuevos retos, como la creación de soluciones basadas en Blockchain o el diseño de interfaces atractivas con Tailwind CSS y React. También me enfoco en el backend utilizando herramientas como Spring Boot, que me permite desarrollar aplicaciones rápidas, seguras y escalables." },
    { id: "about-teamwork-title", text: "Trabajo en Equipo" },
    { id: "about-teamwork-text", text: "En el día a día, me gusta trabajar en equipo, compartir conocimientos y aprender de las experiencias de otros. Considero que la comunicación efectiva, el trabajo colaborativo y la creatividad son clave para el éxito de cualquier proyecto. Además, soy una persona organizada, comprometida, proactiva, flexible, motivada y con gran capacidad de adaptación, lo que me permite gestionar múltiples tareas y proyectos de manera eficiente sin perder calidad en el trabajo." },
    { id: "about-tools-title", text: "Herramientas" },
    { id: "about-tools-text", text: "Algunas de las herramientas que utilizo habitualmente en mi trabajo incluyen GitHub para el control de versiones, Docker para la contenedorización de aplicaciones, y Postman para la prueba de APIs. Me apasiona aprender nuevas tecnologías, explorar herramientas innovadoras, mejorar procesos y siempre estoy buscando formas de optimizar procesos, mejorar la calidad y rendimiento de las aplicaciones de manera constante y eficiente." },
    { id: "available-title", text: "¡Vamos a crear algo juntos!" },
    { id: "available-description", text: "Estoy en búsqueda de nuevos proyectos emocionantes y estaría encantado de escuchar tus ideas. Ya sea que tengas un concepto claro o solo una idea en mente, podemos trabajar juntos para darle vida. ¡No importa el tamaño del proyecto, lo importante es que trabajemos juntos para lograrlo!" },
    { id: "available-call-to-action", text: "Tómate un momento para contarme lo que tienes en mente, ¡y comencemos a crear algo increíble juntos! Estoy listo para aportar mi experiencia y habilidades para hacer que tu visión se haga realidad." },
    { id: "available-more-info", text: "Ya sea un sitio web, una aplicación o cualquier otro tipo de proyecto, puedo ayudarte a transformar tus ideas en un producto final. ¡Hablemos y hagamos que suceda!" },
    { id: "whatsapp-button", text: "Envíame un WhatsApp" },
    { id: "projects-title", text: "Proyectos Destacados" },
    { id: "project-nexcoin-title", text: "Proyecto NexCoin" },
    { id: "project-nexcoin-description", text: "Plataforma para gestionar monedas digitales y transacciones de forma segura." },
    { id: "project-nexcoin-button", text: "Ver Proyecto" },
    { id: "project-divinex-title", text: "Proyecto Divinex" },
    { id: "project-divinex-description", text: "Plataforma interactiva para la gestión de datos y servicios web con enfoque en la experiencia del usuario." },
    { id: "project-divinex-button", text: "Ver Proyecto" },
    { id: "footer-text", text: "© 2024 Miguel Carlos Rojas. Todos los derechos reservados." },
    { id: "skills-title", text: "Habilidades y Tecnologías" },
    { id: "skills-subtitle", text: "Estas son las herramientas y tecnologías que utilizo para crear soluciones modernas y efectivas." },
    { id: "skill-html-description", text: "Experto en diseño de interfaces web modernas y funcionales." },
    { id: "skill-css-description", text: "Estilos avanzados para experiencia visual fluida." },
    { id: "skill-typescript-description", text: "Código robusto y tipado para proyectos escalables." },
    { id: "skill-react-vite-description", text: "Desarrollo de frontend con herramientas modernas." },
    { id: "skill-angular-description", text: "Creación de aplicaciones web robustas con arquitectura MVC." },
    { id: "skill-tailwind-description", text: "Estilos personalizados y flexibles para interfaces únicas." },
    { id: "skill-bootstrap-description", text: "Diseños rápidos con componentes predefinidos." },
    { id: "skill-docker-description", text: "Contenedores para despliegue y desarrollo escalable." },
    { id: "skill-git-description", text: "Control de versiones para gestionar cambios." },
    { id: "skill-github-description", text: "Colaboración en proyectos y almacenamiento de código." },
    { id: "skill-firebase-description", text: "Integración para autenticación y almacenamiento en la nube." },
    { id: "skill-postman-description", text: "Pruebas de API para asegurar la calidad del backend." },
    { id: "skill-mysql-description", text: "Gestión de bases de datos relacionales con MySQL." },
    { id: "skill-postgresql-description", text: "Gestión avanzada de bases de datos PostgreSQL." },
    { id: "skill-mongodb-description", text: "Gestión de bases de datos NoSQL con MongoDB." },
    { id: "skill-sqlserver-description", text: "Herramienta avanzada de administración SQL Server." },
    { id: "skill-oraclesql-description", text: "Desarrollo y administración de bases de datos Oracle SQL." },
    { id: "skill-trello-description", text: "Gestión de proyectos y tareas colaborativa de forma eficiente." },
    { id: "skill-googledocs-description", text: "Creación y colaboración en documentos de texto." },
    { id: "skill-googleslides-description", text: "Creación y presentación de diapositivas interactivas." },
    { id: "skill-googlesheets-description", text: "Gestión de datos y fórmulas en hojas de cálculo colaborativas." },
    { id: "skill-googleforms-description", text: "Creación de formularios y encuestas de forma sencilla." },
    { id: "skill-googlemeet-description", text: "Plataforma de videoconferencias para reuniones remotas." },
    { id: "skill-googledrive-description", text: "Almacenamiento en la nube para colaborar en archivos." },
  ];

  const translations: Record<string, string> = {};

  for (const element of elementsToTranslate) {
    if (!element.text.trim()) continue;
    const translatedText = await translateText(element.text, targetLanguage);
    translations[element.id] = translatedText;
  }

  return translations;
}

// Función para actualizar el ícono de la bandera
function updateFlagIcon(language: string): void {
  const flagIcon = document.getElementById("flag-icon") as HTMLImageElement | null;
  if (flagIcon) {
    if (language === "es") {
      flagIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/24px-Flag_of_Mexico.svg.png";
      flagIcon.alt = "Bandera de México";
    } else {
      flagIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/24px-Flag_of_the_United_States.svg.png";
      flagIcon.alt = "Bandera de Estados Unidos";
    }
  }
}

// Función para enviar una solicitud de traducción al backend
async function translateText(text: string, targetLanguage: string): Promise<string> {
  const response = await fetch(API_TRANSLATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, targetLanguage }),
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud de traducción.");
  }

  const data: TranslateResponse = await response.json();
  return data.translatedText;
}

// Función para mostrar el ícono de carga
function showLoading(): void {
  const loadingOverlay = document.getElementById("loading-overlay") as HTMLElement | null;
  loadingOverlay?.classList.add("active");
}

// Función para ocultar el ícono de carga
function hideLoading(): void {
  const loadingOverlay = document.getElementById("loading-overlay") as HTMLElement | null;
  loadingOverlay?.classList.remove("active");
}