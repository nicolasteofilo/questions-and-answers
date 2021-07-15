const express = require("express")
const app = express()


// EJS 
app.set('view engine', 'ejs') // usar o ejs como view engine



// ROUTES
app.get("/", (req, res) => {
    res.render("index")
})


// RUNING APPLICATION

PORT = 5000
app.listen(PORT, () => { console.log(`Servidor rodando: http://localhost:${PORT}`); })