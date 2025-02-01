const express = require('express');
const path = require('path');
const translate = require('google-translate-api-x');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint para traducir texto
app.post('/translate', async (req, res) => {
    const { text, targetLanguage } = req.body;

    try {
        const result = await translate(text, { to: targetLanguage });
        res.json({ translatedText: result.text });
    } catch (error) {
        console.error(`Error durante la traducción: ${error.message}`);
        res.status(500).json({ error: 'No se pudo completar la traducción.' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});