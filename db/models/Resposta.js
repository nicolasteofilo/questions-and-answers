const Sequelize = require("sequelize")
const connection = require("../connection") //isso porque eu já estou no diretorio de 

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // nos precisamos saber a qual campo está resposta pertence
    // o campo perguntaId vai quardar o Id da pergunta a qual ele está respondendo
    // relacionan uma tabela com a outra
})

Resposta.sync({force: false})

module.exports = Resposta
