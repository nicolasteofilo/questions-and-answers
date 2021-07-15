const express = require("express");
const app = express();

// EJS
app.set("view engine", "ejs"); // usar o ejs como view engine
app.use(express.static('public'))

// ROUTES
app.get("/:nome?/:lang?", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;

  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-Cola", preco: 5 },
    { nome: "Leite", preco: 1.45 },
    { nome: "Carne", preco: 5 },
  ];
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Nicolas Bussines",
    msg: exibirMsg,
    produtos: produtos,
  });
});

// RUNING APPLICATION

PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
