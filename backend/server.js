const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const path = require("path");

const app = express();

// Conectar banco
connectDB();

// Middleware
app.use(express.json());

// ROTAS API
app.use("/api/auth", require("./routes/auth"));

// FRONTEND
app.use(express.static(path.join(__dirname, "../frontend")));

// FALLBACK (FUNCIONA NO EXPRESS 5)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});