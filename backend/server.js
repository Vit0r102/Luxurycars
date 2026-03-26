const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const app = express();

// conectar banco
connectDB();

// middleware
app.use(express.json());

// CORS 
app.use(cors());

// rotas
app.use("/api/auth", require("./routes/auth"));

// servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});