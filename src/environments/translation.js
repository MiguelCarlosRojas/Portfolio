// Función para cambiar el idioma y actualizar la interfaz
export async function toggleLanguage() {
    const currentLanguage = getCurrentLanguage();
    const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';

    try {
        // Mostrar el ícono de carga
        showLoading();

        // Traducir todos los elementos de la página
        await translateAllElements(targetLanguage);

        // Actualizar el ícono de la bandera
        updateFlagIcon(targetLanguage);

        // Establecer el nuevo idioma actual
        setCurrentLanguage(targetLanguage);
    } catch (error) {
        console.error('Error al traducir:', error);
        alert('Ocurrió un error al traducir el contenido.');
    } finally {
        // Ocultar el ícono de carga después de completar el proceso
        hideLoading();
    }
}

// Función para obtener el idioma actual
function getCurrentLanguage() {
    return localStorage.getItem('currentLanguage') || 'es';
}

// Función para establecer el idioma actual
function setCurrentLanguage(language) {
    localStorage.setItem('currentLanguage', language);
}

// Función para traducir todos los elementos de la página
async function translateAllElements(targetLanguage) {
    const elementsToTranslate = [
        { id: 'page-title', text: document.title },
        { id: 'title', text: document.getElementById('title')?.innerText || '' },
        { id: 'content', text: document.getElementById('content')?.innerText || '' },
        { id: 'nav-about', text: document.getElementById('nav-about')?.innerText || '' },
        { id: 'nav-contact', text: document.getElementById('nav-contact')?.innerText || '' },
        { id: 'nav-skills', text: document.getElementById('nav-skills')?.innerText || '' },
        { id: 'nav-projects', text: document.getElementById('nav-projects')?.innerText || '' },
        { id: 'header-greeting', text: document.getElementById('header-greeting')?.innerText || '' },
        { id: 'header-name', text: document.getElementById('header-name')?.innerText || '' },
        { id: 'download-cv', text: document.getElementById('download-cv')?.innerText || '' },
        { id: 'about-title', text: document.getElementById('about-title')?.innerText || '' },
        { id: 'about-subtitle', text: document.getElementById('about-subtitle')?.innerText || '' },
        { id: 'about-experience-title', text: document.getElementById('about-experience-title')?.innerText || '' },
        { id: 'about-experience-text', text: document.getElementById('about-experience-text')?.innerText || '' },
        { id: 'about-passion-title', text: document.getElementById('about-passion-title')?.innerText || '' },
        { id: 'about-passion-text', text: document.getElementById('about-passion-text')?.innerText || '' },
        { id: 'about-teamwork-title', text: document.getElementById('about-teamwork-title')?.innerText || '' },
        { id: 'about-teamwork-text', text: document.getElementById('about-teamwork-text')?.innerText || '' },
        { id: 'about-tools-title', text: document.getElementById('about-tools-title')?.innerText || '' },
        { id: 'about-tools-text', text: document.getElementById('about-tools-text')?.innerText || '' },
        { id: 'available-title', text: document.getElementById('available-title')?.innerText || '' },
        { id: 'available-description', text: document.getElementById('available-description')?.innerText || '' },
        { id: 'available-call-to-action', text: document.getElementById('available-call-to-action')?.innerText || '' },
        { id: 'available-more-info', text: document.getElementById('available-more-info')?.innerText || '' },
        { id: 'whatsapp-button', text: document.getElementById('whatsapp-button')?.innerText || '' },
        { id: 'projects-title', text: document.getElementById('projects-title')?.innerText || '' },
        { id: 'project-nexcoin-title', text: document.getElementById('project-nexcoin-title')?.innerText || '' },
        { id: 'project-nexcoin-description', text: document.getElementById('project-nexcoin-description')?.innerText || '' },
        { id: 'project-nexcoin-button', text: document.getElementById('project-nexcoin-button')?.innerText || '' },
        { id: 'project-divinex-title', text: document.getElementById('project-divinex-title')?.innerText || '' },
        { id: 'project-divinex-description', text: document.getElementById('project-divinex-description')?.innerText || '' },
        { id: 'project-divinex-button', text: document.getElementById('project-divinex-button')?.innerText || '' },
        { id: 'footer-text', text: document.getElementById('footer-text')?.innerText || '' },
        { id: 'skills-title', text: document.getElementById('skills-title')?.innerText || '' },
        { id: 'skills-subtitle', text: document.getElementById('skills-subtitle')?.innerText || '' },
        { id: 'skill-html-description', text: document.getElementById('skill-html-description')?.innerText || '' },
        { id: 'skill-css-description', text: document.getElementById('skill-css-description')?.innerText || '' },
        { id: 'skill-typescript-description', text: document.getElementById('skill-typescript-description')?.innerText || '' },
        { id: 'skill-react-vite-description', text: document.getElementById('skill-react-vite-description')?.innerText || '' },
        { id: 'skill-angular-description', text: document.getElementById('skill-angular-description')?.innerText || '' },
        { id: 'skill-tailwind-description', text: document.getElementById('skill-tailwind-description')?.innerText || '' },
        { id: 'skill-bootstrap-description', text: document.getElementById('skill-bootstrap-description')?.innerText || '' },
        { id: 'skill-docker-description', text: document.getElementById('skill-docker-description')?.innerText || '' },
        { id: 'skill-git-description', text: document.getElementById('skill-git-description')?.innerText || '' },
        { id: 'skill-github-description', text: document.getElementById('skill-github-description')?.innerText || '' },
        { id: 'skill-firebase-description', text: document.getElementById('skill-firebase-description')?.innerText || '' },
        { id: 'skill-postman-description', text: document.getElementById('skill-postman-description')?.innerText || '' },
        { id: 'skill-mysql-description', text: document.getElementById('skill-mysql-description')?.innerText || '' },
        { id: 'skill-postgresql-description', text: document.getElementById('skill-postgresql-description')?.innerText || '' },
        { id: 'skill-mongodb-description', text: document.getElementById('skill-mongodb-description')?.innerText || '' },
        { id: 'skill-sqlserver-description', text: document.getElementById('skill-sqlserver-description')?.innerText || '' },
        { id: 'skill-oraclesql-description', text: document.getElementById('skill-oraclesql-description')?.innerText || '' },
        { id: 'skill-trello-description', text: document.getElementById('skill-trello-description')?.innerText || '' },
        { id: 'skill-googledocs-description', text: document.getElementById('skill-googledocs-description')?.innerText || '' },
        { id: 'skill-googleslides-description', text: document.getElementById('skill-googleslides-description')?.innerText || '' },
        { id: 'skill-googlesheets-description', text: document.getElementById('skill-googlesheets-description')?.innerText || '' },
        { id: 'skill-googleforms-description', text: document.getElementById('skill-googleforms-description')?.innerText || '' },
        { id: 'skill-googlemeet-description', text: document.getElementById('skill-googlemeet-description')?.innerText || '' },
        { id: 'skill-googledrive-description', text: document.getElementById('skill-googledrive-description')?.innerText || '' },
    ];

    for (const element of elementsToTranslate) {
        if (!element.text.trim()) continue; // Ignorar elementos vacíos
        const translatedText = await translateText(element.text, targetLanguage);
        if (element.id === 'page-title') {
            document.title = translatedText; // Actualizar el título de la página
        } else {
            document.getElementById(element.id).innerText = translatedText;
        }
    }
}

// Función para actualizar el ícono de la bandera
function updateFlagIcon(language) {
    const flagIcon = document.getElementById('flag-icon');
    if (language === 'es') {
        flagIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/24px-Flag_of_Mexico.svg.png';
        flagIcon.alt = 'Bandera de México';
    } else {
        flagIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/24px-Flag_of_the_United_States.svg.png';
        flagIcon.alt = 'Bandera de Estados Unidos';
    }
}

// Función para enviar una solicitud de traducción al backend
async function translateText(text, targetLanguage) {
    const response = await fetch('http://localhost:3000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, targetLanguage }),
    });

    if (!response.ok) {
        throw new Error('Error en la solicitud de traducción.');
    }

    const data = await response.json();
    return data.translatedText;
}

// Función para mostrar el ícono de carga
function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.add('active');
}

// Función para ocultar el ícono de carga
function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('active');
}