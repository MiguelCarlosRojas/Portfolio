let currentLanguage = 'es'; // Idioma inicial: español

document.getElementById('toggle-language').addEventListener('click', async () => {
    // Determinar el idioma objetivo
    const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';

    // Obtener el contenido actual
    const title = document.getElementById('title').innerText;
    const content = document.getElementById('content').innerText;

    try {
        // Traducir el título y el contenido
        const translatedTitle = await translateText(title, targetLanguage);
        const translatedContent = await translateText(content, targetLanguage);

        // Actualizar el DOM con el texto traducido
        document.getElementById('title').innerText = translatedTitle;
        document.getElementById('content').innerText = translatedContent;

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