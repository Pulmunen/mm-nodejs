const mysql = require('mysql2')

const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	database:'node_complete',
	password: 'node_trainee123'
})

module.exports = pool.promise()