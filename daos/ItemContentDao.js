/**
 * create by hy ON 2020/8/31
 */
const {sequelize} = require('../config/db.config');
const ItemContent = require('../models/ItemContent');

exports = module.exports = {
	add: async function (itemContent) {
		return await sequelize.transaction({}, (transaction) => {
			return ItemContent.create(itemContent, {transaction})
		})
	},
	findById: async function (id) {
		const rows = await ItemContent.findAll({
			where:{
				id
			}
		});

		return rows?.[0]
	}
};
