/**
 * create by hy ON 2020/3/28
 */
const {sequelize} = require('../config/db.config');
const HanPigs = require('../models/HanPig');

exports = module.exports = {
	add: async function (hanPig) {
		return await sequelize.transaction({}, (transaction) => {
			return HanPigs.create(hanPig, {transaction})
		})
	},
	bulkAdd: async function(hanPigs){
		return  await sequelize.transaction({}, (transaction) => {
			return HanPigs.bulkCreate(hanPigs, {transaction})
		})
	},
	findByPage: async function (pageSize = 15, page = 1) {
		const rows = await HanPigs.findAll({
			limit: pageSize,
			offset: pageSize * (page - 1)
		});

		const queryTotal = await sequelize.query('SELECT COUNT(e.id) as total from hanPigs e');
		const total = queryTotal[0][0].total;

		return {
			rows,
			total: total,
			currentPage: page,
			totalPage: parseInt((total / pageSize).toString()) + (total % pageSize ? 1 : 0),
		}
	}
};
