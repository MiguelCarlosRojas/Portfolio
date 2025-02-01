const express = require("express");
const path = require("path");
const cors = require("cors");
const translate = require("google-translate-api-x");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes desde el frontend
app.use(
  cors({
    origin: "https://portfolio-miguel-carloss-projects.vercel.app", // Permite solo este origen
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Endpoint para traducir texto
app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;
  try {
    const result = await translate(text, { to: targetLanguage });
    res.json({ translatedText: result.text });
  } catch (error) {
    console.error(`Error durante la traducción: ${error.message}`);
    res.status(500).json({ error: "No se pudo completar la traducción." });
  }
});

// Puerto dinámico para compatibilidad con Vercel
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});