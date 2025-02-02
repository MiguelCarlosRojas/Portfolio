const express = require("express");
const path = require("path");
const cors = require("cors");
const translate = require("google-translate-api-x");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint para traducir texto
app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Faltan parámetros requeridos." });
  }

  try {
    const result = await translate(text, { to: targetLanguage });
    res.json({ translatedText: result.text });
  } catch (error) {
    console.error(`Error durante la traducción: ${error.message}`);
    res.status(500).json({ error: "No se pudo completar la traducción." });
  }
});

// Exportar la app para Vercel
module.exports = app;