const express = require("express");
const app = express();
const connection = require("./db/connection")
const Pergunta = require("./db/models/Pergunta")
// const Resposta = require("./db/models/Resposta")

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
	Pergunta.findAll({raw: true, order: [['id', 'DESC']]}).then(perguntas => {
	console.log(perguntas)
	res.render("index", {
		perguntas: perguntas
	});
   }); //responsavel por procurar tudo na nossa tabela	
       // ASC = Crescente || DESC = Decrescente
});

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
        res.render("pergunta", {
          pergunta: pergunta // defini isso para poder mostart no front-end
        })
      } else { // não encontrada
        res.redirect("/")
      }
    // o then vai ser executado após fazer a pesquisa no db, e ele vai passar a pergunta nessa váriavel pergunta
  })
})

// RUNING APPLICATION
app.listen(9000)