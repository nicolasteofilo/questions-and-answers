const Sequelie = require("sequelize")
const connection = require("../connection") //isso porque eu já estou no diretorio de 

const Resposta = connection.define({
    corpo: {
        type:Sequelie.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelie.INT,
        allowNull: false

    }
    // nos precisamos saber a qual campo está resposta pertence
    // o campo perguntaId vai quardar o Id da pergunta a qual ele está respondendo
    // relacionan uma tabela com a outra
})

Resposta.sync({force: false})

module.exports = Resposta