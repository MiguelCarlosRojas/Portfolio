const express = require("express");
const path = require("path");
const cors = require("cors");
const translate = require("google-translate-api-x");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.static(path.join(__dirname)));

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

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});