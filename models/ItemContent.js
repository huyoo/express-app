/**
 * create by hy ON 2020/8/31
 */
const {Sequelize, Sequelize: {Model}, sequelize} = require('../config/db.config');

class ItemContent extends Model {
}

ItemContent.init({
	id: {
		type: Sequelize.STRING(36),
		primaryKey: true,
	},
	content: {
		type: Sequelize.STRING,
	},
}, {
	sequelize,
	modelName: 'item_content',
	freezeTableName: true,
	timestamps: false
});

module.exports = ItemContent;
