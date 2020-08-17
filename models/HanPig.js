/**
 *
 * create by hy ON 2020/3/7
 */
const {Sequelize, Sequelize: {Model}, sequelize} = require('../config/db.config');

class HanPig extends Model {
}

HanPig.init({
	id: {
		type: Sequelize.STRING(36),
		primaryKey: true,
	},
	title: {
		type: Sequelize.STRING,
	},
	img: {
		type: Sequelize.STRING,
		allowNull:true
	},
	href: {
		type: Sequelize.STRING
	},
	createdDate: {
		type: Sequelize.DATE,
	}
}, {
	sequelize,
	modelName: 'hanpigs',
	freezeTableName: true,
	timestamps: false
});

module.exports = HanPig;
