/**
 * create by hy ON 2020/3/7
 */
const  Sequelize = require('sequelize');

let config = {
	database: 'node', // 使用哪个数据库
	username: 'root', // 用户名
	password: '123456', // 口令
	host: 'localhost', // 主机名
	port: 3306 // 端口号，MySQL默认3306
};

let sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	},
	logging: console.log
});

let TEST_DATABASE_CONFIG = {
	database: 'frozen_account', // 使用哪个数据库
	username: 'basic_siud', // 用户名
	password: 'dw2Tk9kxVUn41Nye7EhD', // 口令
	host: '10.4.208.68', // 主机名
	port: 3306 // 端口号，MySQL默认3306
};

let testSequelize = new Sequelize(TEST_DATABASE_CONFIG.database, TEST_DATABASE_CONFIG.username, TEST_DATABASE_CONFIG.password, {
	host: TEST_DATABASE_CONFIG.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	}
});


module.exports = {
	Sequelize,
	sequelize,
	testSequelize
};
