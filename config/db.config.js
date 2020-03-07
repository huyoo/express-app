/**
 * create by hy ON 2020/3/7
 */
const  Sequelize = require('sequelize');

let config = {
	database: 'service_demoapp', // 使用哪个数据库
	username: 'sa', // 用户名
	password: 'Falm0kNxnPrtm0mzuMuo', // 口令
	host: '10.4.208.131', // 主机名
	port: 3306 // 端口号，MySQL默认3306
};

let sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	}
});

module.exports = {
	Sequelize,
	sequelize
};
