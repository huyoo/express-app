/**
 *
 * create by hy ON 2020/3/7
 */
const {Sequelize, Sequelize: {Model}, sequelize} = require('../config/db.config');

class Employer extends Model {
}

Employer.init({
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	}
}, {
	sequelize,
	modelName: 'employer',
	freezeTableName: true,
	timestamps: false
});

module.exports = Employer;
