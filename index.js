const express = require("express");
const app = express();

// EJS
app.set("view engine", "ejs"); // usar o ejs como view engine
app.use(express.static('public'))

// URL
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {  
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo
  var descrisao = req.body.descrisao
  res.send(`Formulário recebido! Título:${titulo}, Descrisão:${descrisao}`)
})

// RUNING APPLICATION

PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
