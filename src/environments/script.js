let currentLanguage = 'es'; // Idioma inicial: español

document.getElementById('toggle-language').addEventListener('click', async () => {
    // Determinar el idioma objetivo
    const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';

    try {
        // Traducir cada elemento con un ID
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
            { id: 'footer-text', text: document.getElementById('footer-text')?.innerText || '' }, // Nuevo elemento
        ];

        // Traducir todos los elementos
        for (const element of elementsToTranslate) {
            if (!element.text.trim()) continue; // Ignorar elementos vacíos
            const translatedText = await translateText(element.text, targetLanguage);
            if (element.id === 'page-title') {
                document.title = translatedText; // Actualizar el título de la página
            } else {
                document.getElementById(element.id).innerText = translatedText;
            }
        }

        // Cambiar el idioma actual
        currentLanguage = targetLanguage;
    } catch (error) {
        console.error('Error al traducir:', error);
        alert('Ocurrió un error al traducir el contenido.');
    }
});

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