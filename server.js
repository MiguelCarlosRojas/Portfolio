const express = require("express");
const path = require("path");
const cors = require("cors");
const translate = require("google-translate-api-x");
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes solo desde tu dominio público
const allowedOrigins = [
  "https://portfolio-miguel-carloss-projects.vercel.app", // Tu dominio público
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Acceso no permitido por CORS"));
      }
    },
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});