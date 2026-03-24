// Esse Define as rotas da API (login, cadastro e rota protegida)
const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

// Rotas públicas
router.post("/register", register);
router.post("/login", login);

// Rota protegida
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    msg: "Você acessou uma rota protegida ",
    user: req.user
  });
});

module.exports = router;

// Socorro.
