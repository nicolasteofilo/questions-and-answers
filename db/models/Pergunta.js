const Sequelize  = require("sequelize")
const connection = require("../connection") //isso porque eu já estou no diretorio de

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // nos precisamos saber a qual campo está resposta pertence
    // o campo perguntaId vai quardar o Id da pergunta a qual ele está respondendo
    // relacionan uma tabela com a outra
})

Pergunta.sync({force: false})

module.exports = Pergunta