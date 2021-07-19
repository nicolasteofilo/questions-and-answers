const express = require("express");
const app = express();
const connection = require("./db/connection")
const Pergunta = require("./db/models/Pergunta")
const Resposta = require("./db/models/Resposta")

// DB 
connection
  .authenticate()  
  .then(() => { console.log("Connection in db success"); })
  .catch((err) => { console.log(err) })

// EJS
app.set("view engine", "ejs"); // usar o ejs como view engine
app.use(express.static('public'))

// URL
app.use(express.urlencoded({ extended: false }))
app.use(express.json());



// ROUTES
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order:[
    ['id', 'DESC' ]
  ] }).then(perguntas => {
    res.render("index",{
      perguntas: perguntas
    })
  })
})

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/")
  })

})

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta => {
      if(pergunta != undefined){ // pergunta achada


        Resposta.findAll({
          where: {perguntaId: pergunta.id},
          order: [['id', 'DESC']]
        }).then(respostas => {
          res.render("pergunta", {
            pergunta: pergunta, // defini isso para poder mostart no front-end
            respostas: respostas 
          })
        })

      } else { // não encontrada
        res.redirect("/")
      }
    // o then vai ser executado após fazer a pesquisa no db, e ele vai passar a pergunta nessa váriavel pergunta
  })
})

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo
  var perguntaId = req.body.pergunta
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => { 
    res.redirect(`/pergunta/${perguntaId}`)
  })
})

// RUNING APPLICATION
app.listen(9000, () => {
  console.log("Server is runing in port 9000");
})