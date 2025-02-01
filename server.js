const express = require("express");
const path = require("path");
const cors = require("cors");
const translate = require("google-translate-api-x");

const app = express();
const port = process.env.PORT || 3000; // Usa el puerto proporcionado por el entorno (por ejemplo, Vercel)

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

// Endpoint para traducir texto
app.post("/api/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;
  try {
    const result = await translate(text, { to: targetLanguage });
    res.json({ translatedText: result.text });
  } catch (error) {
    console.error(`Error durante la traducción: ${error.message}`);
    res.status(500).json({ error: "No se pudo completar la traducción." });
  }
});

// Servir archivos estáticos del frontend
const frontendPath = path.join(__dirname, "frontend"); // Asegúrate de que esta carpeta contiene tu frontend construido
app.use(express.static(frontendPath));

// Manejar rutas no encontradas (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});