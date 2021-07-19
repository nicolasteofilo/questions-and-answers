const Sequelize = require('sequelize')

const connection = new Sequelize('perguntas_e_respostas', 'root', '988440271Ni@', {
	host: 'localhost',
	dialect: 'mysql'	
})
//                                                 

module.exports = connection // exportanto a conexão