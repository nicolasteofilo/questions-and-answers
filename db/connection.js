const Sequelize = require('sequelize')

const connection = new Sequelize('perguntas_e_respostas', 'root', '988440271Ni@', {
	host: 'localhost',
	dialect: 'mysql'	
})
//                                                  user   password

module.exports = connection // exportanto a conexão